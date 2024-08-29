# Curseforge Schema Scraper

Scrapes and converts schemas from https://docs.curseforge.com/ to TypeScript using PlayWright.

## Usage

Run the following commands

```bash
git clone https://github.com/araguma/curseforge-schema-scraper.git
cd curseforge-schema-scraper/
npm ci
npm start
```

Once the program is done a `curseforge.ts` file will appear in the `output` directory

## Sample Output

```typescript
export type CurseForgeApiResponseOfListOfMinecraftGameVersion = {
    CurseForgedata: CurseForgeMinecraftGameVersion[]
}

export type CurseForgeApiResponseOfListOfMinecraftModLoaderIndex = {
    CurseForgedata: CurseForgeMinecraftModLoaderIndex[]
}

export type CurseForgeApiResponseOfMinecraftGameVersion = {
    CurseForgedata: CurseForgeMinecraftGameVersion
}

export type CurseForgeApiResponseOfMinecraftModLoaderVersion = {
    CurseForgedata: CurseForgeMinecraftModLoaderVersion
}

export type CurseForgeCategory = {
    CurseForgeid: number
    CurseForgegameId: number
    CurseForgename: string
    CurseForgeslug: string
    CurseForgeurl: string
    CurseForgeiconUrl: string
    CurseForgedateModified: string
    CurseForgeisClass: boolean | null
    CurseForgeclassId: number | null
    CurseForgeparentCategoryId: number | null
    CurseForgedisplayIndex: number | null
}

export enum CurseForgeCoreApiStatus {
    CurseForgePrivate = 1,
    CurseForgePublic = 2,
}

export enum CurseForgeCoreStatus {
    CurseForgeDraft = 1,
    CurseForgeTest = 2,
    CurseForgePendingReview = 3,
    CurseForgeRejected = 4,
    CurseForgeApproved = 5,
    CurseForgeLive = 6,
}

export type CurseForgeFeaturedModsResponse = {
    CurseForgefeatured: CurseForgeMod[]
    CurseForgepopular: CurseForgeMod[]
    CurseForgerecentlyUpdated: CurseForgeMod[]
}

export type CurseForgeFile = {
    CurseForgeid: number
    CurseForgegameId: number
    CurseForgemodId: number
    CurseForgeisAvailable: boolean
    CurseForgedisplayName: string
    CurseForgefileName: string
    CurseForgereleaseType: CurseForgeFileReleaseType
    CurseForgefileStatus: CurseForgeFileStatus
    CurseForgehashes: CurseForgeFileHash[]
    CurseForgefileDate: string
    CurseForgefileLength: number
    CurseForgedownloadCount: number
    CurseForgefileSizeOnDisk: number | null
    CurseForgedownloadUrl: string
    CurseForgegameVersions: string[]
    CurseForgesortableGameVersions: CurseForgeSortableGameVersion[]
    CurseForgedependencies: CurseForgeFileDependency[]
    CurseForgeexposeAsAlternative: boolean | null
    CurseForgeparentProjectFileId: number | null
    CurseForgealternateFileId: number | null
    CurseForgeisServerPack: boolean | null
    CurseForgeserverPackFileId: number | null
    CurseForgeisEarlyAccessContent: boolean | null
    CurseForgeearlyAccessEndDate: string | null
    CurseForgefileFingerprint: number
    CurseForgemodules: CurseForgeFileModule[]
}

export type CurseForgeFileDependency = {
    CurseForgemodId: number
    CurseForgerelationType: CurseForgeFileRelationType
}

export type CurseForgeFileHash = {
    CurseForgevalue: string
    CurseForgealgo: CurseForgeHashAlgo
}

export type CurseForgeFileIndex = {
    CurseForgegameVersion: string
    CurseForgefileId: number
    CurseForgefilename: string
    CurseForgereleaseType: CurseForgeFileReleaseType
    CurseForgegameVersionTypeId: number | null
    CurseForgemodLoader: CurseForgeModLoaderType
}

export type CurseForgeFileModule = {
    CurseForgename: string
    CurseForgefingerprint: number
}

export enum CurseForgeFileRelationType {
    CurseForgeEmbeddedLibrary = 1,
    CurseForgeOptionalDependency = 2,
    CurseForgeRequiredDependency = 3,
    CurseForgeTool = 4,
    CurseForgeIncompatible = 5,
    CurseForgeInclude = 6,
}

export enum CurseForgeFileReleaseType {
    CurseForgeRelease = 1,
    CurseForgeBeta = 2,
    CurseForgeAlpha = 3,
}

export enum CurseForgeFileStatus {
    CurseForgeProcessing = 1,
    CurseForgeChangesRequired = 2,
    CurseForgeUnderReview = 3,
    CurseForgeApproved = 4,
    CurseForgeRejected = 5,
    CurseForgeMalwareDetected = 6,
    CurseForgeDeleted = 7,
    CurseForgeArchived = 8,
    CurseForgeTesting = 9,
    CurseForgeReleased = 10,
    CurseForgeReadyForReview = 11,
    CurseForgeDeprecated = 12,
    CurseForgeBaking = 13,
    CurseForgeAwaitingPublishing = 14,
    CurseForgeFailedPublishing = 15,
}

export type CurseForgeFingerprintFuzzyMatch = {
    CurseForgeid: number
    CurseForgefile: CurseForgeFile
    CurseForgelatestFiles: CurseForgeFile[]
    CurseForgefingerprints: number[]
}

export type CurseForgeFingerprintFuzzyMatchResult = {
    CurseForgefuzzyMatches: CurseForgeFingerprintFuzzyMatch[]
}

export type CurseForgeFingerprintMatch = {
    CurseForgeid: number
    CurseForgefile: CurseForgeFile
    CurseForgelatestFiles: CurseForgeFile[]
}

export type CurseForgeFingerprintsMatchesResult = {
    CurseForgeisCacheBuilt: boolean
    CurseForgeexactMatches: CurseForgeFingerprintMatch[]
    CurseForgeexactFingerprints: number[]
    CurseForgepartialMatches: CurseForgeFingerprintMatch[]
    CurseForgepartialMatchFingerprints: object
    CurseForgeadditionalProperties: number[]
    CurseForgeinstalledFingerprints: number[]
    CurseForgeunmatchedFingerprints: number[]
}

export type CurseForgeFolderFingerprint = {
    CurseForgefoldername: string
    CurseForgefingerprints: number[]
}

export type CurseForgeGame = {
    CurseForgeid: number
    CurseForgename: string
    CurseForgeslug: string
    CurseForgedateModified: string
    CurseForgeassets: CurseForgeGameAssets
    CurseForgestatus: CurseForgeCoreStatus
    CurseForgeapiStatus: CurseForgeCoreApiStatus
}

export type CurseForgeGameAssets = {
    CurseForgeiconUrl: string
    CurseForgetileUrl: string
    CurseForgecoverUrl: string
}

export type CurseForgeGameVersion = {
    CurseForgeid: number
    CurseForgeslug: string
    CurseForgename: string
}

export type CurseForgeGameVersionsByType = {
    CurseForgetype: number
    CurseForgeversions: string[]
}

export type CurseForgeGameVersionsByType2 = {
    CurseForgetype: number
    CurseForgeversions: CurseForgeGameVersion[]
}

export enum CurseForgeGameVersionStatus {
    CurseForgeApproved = 1,
    CurseForgeDeleted = 2,
    CurseForgeNew = 3,
}

export type CurseForgeGameVersionType = {
    CurseForgeid: number
    CurseForgegameId: number
    CurseForgename: string
    CurseForgeslug: string
    CurseForgeisSyncable: boolean
    CurseForgestatus: CurseForgeGameVersionTypeStatus
}

export enum CurseForgeGameVersionTypeStatus {
    CurseForgeNormal = 1,
    CurseForgeDeleted = 2,
}

export type CurseForgeGetCategoriesResponse = {
    CurseForgedata: CurseForgeCategory[]
}

export type CurseForgeGetFeaturedModsResponse = {
    CurseForgedata: CurseForgeFeaturedModsResponse
}

export type CurseForgeGetFilesResponse = {
    CurseForgedata: CurseForgeFile[]
}

export type CurseForgeGetFingerprintMatchesResponse = {
    CurseForgedata: CurseForgeFingerprintsMatchesResult
}

export type CurseForgeGetFingerprintsFuzzyMatchesResponse = {
    CurseForgedata: CurseForgeFingerprintFuzzyMatchResult
}

export type CurseForgeGetGameResponse = {
    CurseForgedata: CurseForgeGame
}

export type CurseForgeGetGamesResponse = {
    CurseForgedata: CurseForgeGame[]
    CurseForgepagination: CurseForgePagination
}

export type CurseForgeGetModFileResponse = {
    CurseForgedata: CurseForgeFile
}

export type CurseForgeGetModFilesResponse = {
    CurseForgedata: CurseForgeFile[]
    CurseForgepagination: CurseForgePagination
}

export type CurseForgeGetModResponse = {
    CurseForgedata: CurseForgeMod
}

export type CurseForgeGetModsResponse = {
    CurseForgedata: CurseForgeMod[]
}

export type CurseForgeGetVersionTypesResponse = {
    CurseForgedata: CurseForgeGameVersionType[]
}

export type CurseForgeGetVersionsResponseV1 = {
    CurseForgedata: CurseForgeGameVersionsByType[]
}

export type CurseForgeGetVersionsResponseV2 = {
    CurseForgedata: CurseForgeGameVersionsByType2[]
}

export type CurseForgeGetFeaturedModsRequestBody = {
    CurseForgegameId: number
    CurseForgeexcludedModIds: number[]
    CurseForgegameVersionTypeId: number | null
}

export type CurseForgeGetFingerprintMatchesRequestBody = {
    CurseForgefingerprints: number[]
}

export type CurseForgeGetFuzzyMatchesRequestBody = {
    CurseForgegameId: number
    CurseForgefingerprints: CurseForgeFolderFingerprint[]
}

export type CurseForgeGetModFilesRequestBody = {
    CurseForgefileIds: number[]
}

export type CurseForgeGetModsByIdsListRequestBody = {
    CurseForgemodIds: number[]
    CurseForgefilterPcOnly: boolean | null
}

export enum CurseForgeHashAlgo {
    CurseForgeSha1 = 1,
    CurseForgeMd5 = 2,
}

export type CurseForgeMinecraftGameVersion = {
    CurseForgeid: number
    CurseForgegameVersionId: number
    CurseForgeversionString: string
    CurseForgejarDownloadUrl: string
    CurseForgejsonDownloadUrl: string
    CurseForgeapproved: boolean
    CurseForgedateModified: string
    CurseForgegameVersionTypeId: number
    CurseForgegameVersionStatus: CurseForgeGameVersionStatus
    CurseForgegameVersionTypeStatus: CurseForgeGameVersionTypeStatus
}

export type CurseForgeMinecraftModLoaderIndex = {
    CurseForgename: string
    CurseForgegameVersion: string
    CurseForgelatest: boolean
    CurseForgerecommended: boolean
    CurseForgedateModified: string
    CurseForgetype: CurseForgeModLoaderType
}

export type CurseForgeMinecraftModLoaderVersion = {
    CurseForgeid: number
    CurseForgegameVersionId: number
    CurseForgeminecraftGameVersionId: number
    CurseForgeforgeVersion: string
    CurseForgename: string
    CurseForgetype: CurseForgeModLoaderType
    CurseForgedownloadUrl: string
    CurseForgefilename: string
    CurseForgeinstallMethod: CurseForgeModLoaderInstallMethod
    CurseForgelatest: boolean
    CurseForgerecommended: boolean
    CurseForgeapproved: boolean
    CurseForgedateModified: string
    CurseForgemavenVersionString: string
    CurseForgeversionJson: string
    CurseForgelibrariesInstallLocation: string
    CurseForgeminecraftVersion: string
    CurseForgeadditionalFilesJson: string
    CurseForgemodLoaderGameVersionId: number
    CurseForgemodLoaderGameVersionTypeId: number
    CurseForgemodLoaderGameVersionStatus: CurseForgeGameVersionStatus
    CurseForgemodLoaderGameVersionTypeStatus: CurseForgeGameVersionTypeStatus
    CurseForgemcGameVersionId: number
    CurseForgemcGameVersionTypeId: number
    CurseForgemcGameVersionStatus: CurseForgeGameVersionStatus
    CurseForgemcGameVersionTypeStatus: CurseForgeGameVersionTypeStatus
    CurseForgeinstallProfileJson: string
}

export type CurseForgeMod = {
    CurseForgeid: number
    CurseForgegameId: number
    CurseForgename: string
    CurseForgeslug: string
    CurseForgelinks: CurseForgeModLinks
    CurseForgesummary: string
    CurseForgestatus: CurseForgeModStatus
    CurseForgedownloadCount: number
    CurseForgeisFeatured: boolean
    CurseForgeprimaryCategoryId: number
    CurseForgecategories: CurseForgeCategory[]
    CurseForgeclassId: number | null
    CurseForgeauthors: CurseForgeModAuthor[]
    CurseForgelogo: CurseForgeModAsset
    CurseForgescreenshots: CurseForgeModAsset[]
    CurseForgemainFileId: number
    CurseForgelatestFiles: CurseForgeFile[]
    CurseForgelatestFilesIndexes: CurseForgeFileIndex[]
    CurseForgelatestEarlyAccessFilesIndexes: CurseForgeFileIndex[]
    CurseForgedateCreated: string
    CurseForgedateModified: string
    CurseForgedateReleased: string
    CurseForgeallowModDistribution: boolean | null
    CurseForgegamePopularityRank: number
    CurseForgeisAvailable: boolean
    CurseForgethumbsUpCount: number
    CurseForgerating: number | null
}

export type CurseForgeModAsset = {
    CurseForgeid: number
    CurseForgemodId: number
    CurseForgetitle: string
    CurseForgedescription: string
    CurseForgethumbnailUrl: string
    CurseForgeurl: string
}

export type CurseForgeModAuthor = {
    CurseForgeid: number
    CurseForgename: string
    CurseForgeurl: string
}

export type CurseForgeModLinks = {
    CurseForgewebsiteUrl: string
    CurseForgewikiUrl: string
    CurseForgeissuesUrl: string
    CurseForgesourceUrl: string
}

export enum CurseForgeModLoaderInstallMethod {
    CurseForgeForgeInstaller = 1,
    CurseForgeForgeJarInstall = 2,
    CurseForgeForgeInstaller_v2 = 3,
}

export enum CurseForgeModLoaderType {
    CurseForgeAny = 1,
    CurseForgeForge = 2,
    CurseForgeCauldron = 3,
    CurseForgeLiteLoader = 4,
    CurseForgeFabric = 5,
    CurseForgeQuilt = 6,
    CurseForgeNeoForge = 7,
}

export enum CurseForgeModsSearchSortField {
    CurseForgeFeatured = 1,
    CurseForgePopularity = 2,
    CurseForgeLastUpdated = 3,
    CurseForgeName = 4,
    CurseForgeAuthor = 5,
    CurseForgeTotalDownloads = 6,
    CurseForgeCategory = 7,
    CurseForgeGameVersion = 8,
    CurseForgeEarlyAccess = 9,
    CurseForgeFeaturedReleased = 10,
    CurseForgeReleasedDate = 11,
    CurseForgeRating = 12,
}

export enum CurseForgeModStatus {
    CurseForgeNew = 1,
    CurseForgeChangesRequired = 2,
    CurseForgeUnderSoftReview = 3,
    CurseForgeApproved = 4,
    CurseForgeRejected = 5,
    CurseForgeChangesMade = 6,
    CurseForgeInactive = 7,
    CurseForgeAbandoned = 8,
    CurseForgeDeleted = 9,
    CurseForgeUnderReview = 10,
}

export type CurseForgePagination = {
    CurseForgeindex: number
    CurseForgepageSize: number
    CurseForgeresultCount: number
    CurseForgetotalCount: number
}

export type CurseForgeSearchModsResponse = {
    CurseForgedata: CurseForgeMod[]
    CurseForgepagination: CurseForgePagination
}

export type CurseForgeSortableGameVersion = {
    CurseForgegameVersionName: string
    CurseForgegameVersionPadded: string
    CurseForgegameVersion: string
    CurseForgegameVersionReleaseDate: string
    CurseForgegameVersionTypeId: number | null
}

export type CurseForgeStringResponse = {
    CurseForgedata: string
}
```
