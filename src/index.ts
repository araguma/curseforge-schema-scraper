import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'

export type Schema = {
    name?: string
    type?: Record<string, string>
    enum?: string[]
}

const url = 'https://docs.curseforge.com/'
const prefix = 'CurseForge'

async function main() {
    const schemas: Schema[] = []

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    console.log(`Navigating to ${url}...`)
    await page.goto(url)

    console.log('Finding relevant elements...')
    const elementLocators = await page
        .locator(
            ['h2', 'tbody', 'p']
                .map((tag) => `${tag}:above(h1:text("CurseForge for Studios Terms of Us")):below(h1:text("Schemas"))`)
                .join(', '),
        )
        .all()
    console.log(`Found ${elementLocators.length} elements`)

    console.log('Extracting inner texts...')
    const innerTexts = await Promise.all(elementLocators.map((locator) => locator.innerText()))

    console.log('Parsing inner texts...')
    let schema: Schema = {}
    for (const innerText of innerTexts) {
        if (innerText === '' || innerText === 'Possible enum values:') continue

        if (innerText.includes('\t')) {
            const rows = innerText
                .split('\n')
                .filter((row) => {
                    return !row.match(/^\d = .*$/)
                })
                .map((row) => {
                    const columns = row.split('\t')

                    const key = columns[0]
                    const value = columns[1]
                    assert(key)
                    assert(value)

                    return [
                        key.replace(/» /g, ''),
                        value
                            .replace(/integer\(int32\)|integer\(int64\)|integer|number\(decimal\)/g, 'number')
                            .replace(/string\(date-time\)/g, 'string')
                            .replace(/\[/g, '')
                            .replace(/\]/g, '[]')
                            .replace(/¦/g, ' | '),
                    ]
                })
            schema.type = Object.fromEntries(rows)
        } else if (innerText.includes('=')) {
            const key = innerText.split('=')[1]
            assert(key)

            schema.enum = schema.enum ?? []
            schema.enum.push(key)
        } else {
            schema = { name: innerText.replace(/-/g, '').replace(/ /g, '') }
            schemas.push(schema)
        }
    }

    console.log('Converting schemas to TypeScript...')
    let output = ''
    schemas.forEach((schema) => {
        assert(schema.name)

        if (schema.type) {
            output += `export type ${prefix}${schema.name} = {\n`
            Object.entries(schema.type).forEach(([key, value]) => {
                output += `    ${prefix}${key}: ${value.match(/^[A-Z]/) ? prefix : ''}${value}\n`
            })
            output += '}\n\n'
        } else if (schema.enum) {
            output += `export enum ${prefix}${schema.name} {\n`
            schema.enum.forEach((key, index) => {
                output += `    ${prefix}${key} = ${index + 1},\n`
            })
            output += '}\n\n'
        }
    })

    await mkdir('output', { recursive: true })
    await writeFile('output/curseforge.ts', output)

    await context.close()
    await browser.close()
}

main().catch(console.error)
