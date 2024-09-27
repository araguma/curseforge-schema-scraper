# Curseforge Schema Scraper

Scrapes and converts schemas from https://docs.curseforge.com/rest-api/ to TypeScript using PlayWright.

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
    data: CurseForgeMinecraftGameVersion[]
}

export type CurseForgeApiResponseOfListOfMinecraftModLoaderIndex = {
    data: CurseForgeMinecraftModLoaderIndex[]
}

export type CurseForgeApiResponseOfMinecraftGameVersion = {
    data: CurseForgeMinecraftGameVersion
}

export type CurseForgeApiResponseOfMinecraftModLoaderVersion = {
    data: CurseForgeMinecraftModLoaderVersion
}

export type CurseForgeCategory = {
    id: number
    gameId: number
    name: string
    slug: string
    url: string
    iconUrl: string
    dateModified: string
    isClass: boolean | null
    classId: number | null
    parentCategoryId: number | null
    displayIndex: number | null
}

export enum CurseForgeCoreApiStatus {
    Private = 1,
    Public = 2,
}

export enum CurseForgeCoreStatus {
    Draft = 1,
    Test = 2,
    PendingReview = 3,
    Rejected = 4,
    Approved = 5,
    Live = 6,
}

export type CurseForgeFeaturedModsResponse = {
    featured: CurseForgeMod[]
    popular: CurseForgeMod[]
    recentlyUpdated: CurseForgeMod[]
}

export type CurseForgeFile = {
    id: number
    gameId: number
    modId: number
    isAvailable: boolean
    displayName: string
    fileName: string
    releaseType: CurseForgeFileReleaseType
    fileStatus: CurseForgeFileStatus
    hashes: CurseForgeFileHash[]
    fileDate: string
    fileLength: number
    downloadCount: number
    fileSizeOnDisk: number | null
    downloadUrl: string
    gameVersions: string[]
    sortableGameVersions: CurseForgeSortableGameVersion[]
    dependencies: CurseForgeFileDependency[]
    exposeAsAlternative: boolean | null
    parentProjectFileId: number | null
    alternateFileId: number | null
    isServerPack: boolean | null
    serverPackFileId: number | null
    isEarlyAccessContent: boolean | null
    earlyAccessEndDate: string | null
    fileFingerprint: number
    modules: CurseForgeFileModule[]
}

export type CurseForgeFileDependency = {
    modId: number
    relationType: CurseForgeFileRelationType
}

export type CurseForgeFileHash = {
    value: string
    algo: CurseForgeHashAlgo
}

export type CurseForgeFileIndex = {
    gameVersion: string
    fileId: number
    filename: string
    releaseType: CurseForgeFileReleaseType
    gameVersionTypeId: number | null
    modLoader: CurseForgeModLoaderType
}

export type CurseForgeFileModule = {
    name: string
    fingerprint: number
}

export enum CurseForgeFileRelationType {
    EmbeddedLibrary = 1,
    OptionalDependency = 2,
    RequiredDependency = 3,
    Tool = 4,
    Incompatible = 5,
    Include = 6,
}

export enum CurseForgeFileReleaseType {
    Release = 1,
    Beta = 2,
    Alpha = 3,
}

export enum CurseForgeFileStatus {
    Processing = 1,
    ChangesRequired = 2,
    UnderReview = 3,
    Approved = 4,
    Rejected = 5,
    MalwareDetected = 6,
    Deleted = 7,
    Archived = 8,
    Testing = 9,
    Released = 10,
    ReadyForReview = 11,
    Deprecated = 12,
    Baking = 13,
    AwaitingPublishing = 14,
    FailedPublishing = 15,
}

export type CurseForgeFingerprintFuzzyMatch = {
    id: number
    file: CurseForgeFile
    latestFiles: CurseForgeFile[]
    fingerprints: number[]
}

export type CurseForgeFingerprintFuzzyMatchResult = {
    fuzzyMatches: CurseForgeFingerprintFuzzyMatch[]
}

export type CurseForgeFingerprintMatch = {
    id: number
    file: CurseForgeFile
    latestFiles: CurseForgeFile[]
}

export type CurseForgeFingerprintsMatchesResult = {
    isCacheBuilt: boolean
    exactMatches: CurseForgeFingerprintMatch[]
    exactFingerprints: number[]
    partialMatches: CurseForgeFingerprintMatch[]
    partialMatchFingerprints: object
    additionalProperties: number[]
    installedFingerprints: number[]
    unmatchedFingerprints: number[]
}

export type CurseForgeFolderFingerprint = {
    foldername: string
    fingerprints: number[]
}

export type CurseForgeGame = {
    id: number
    name: string
    slug: string
    dateModified: string
    assets: CurseForgeGameAssets
    status: CurseForgeCoreStatus
    apiStatus: CurseForgeCoreApiStatus
}

export type CurseForgeGameAssets = {
    iconUrl: string
    tileUrl: string
    coverUrl: string
}

export type CurseForgeGameVersion = {
    id: number
    slug: string
    name: string
}

export type CurseForgeGameVersionsByType = {
    type: number
    versions: string[]
}

export type CurseForgeGameVersionsByType2 = {
    type: number
    versions: CurseForgeGameVersion[]
}

export enum CurseForgeGameVersionStatus {
    Approved = 1,
    Deleted = 2,
    New = 3,
}

export type CurseForgeGameVersionType = {
    id: number
    gameId: number
    name: string
    slug: string
    isSyncable: boolean
    status: CurseForgeGameVersionTypeStatus
}

export enum CurseForgeGameVersionTypeStatus {
    Normal = 1,
    Deleted = 2,
}

export type CurseForgeGetCategoriesResponse = {
    data: CurseForgeCategory[]
}

export type CurseForgeGetFeaturedModsResponse = {
    data: CurseForgeFeaturedModsResponse
}

export type CurseForgeGetFilesResponse = {
    data: CurseForgeFile[]
}

export type CurseForgeGetFingerprintMatchesResponse = {
    data: CurseForgeFingerprintsMatchesResult
}

export type CurseForgeGetFingerprintsFuzzyMatchesResponse = {
    data: CurseForgeFingerprintFuzzyMatchResult
}

export type CurseForgeGetGameResponse = {
    data: CurseForgeGame
}

export type CurseForgeGetGamesResponse = {
    data: CurseForgeGame[]
    pagination: CurseForgePagination
}

export type CurseForgeGetModFileResponse = {
    data: CurseForgeFile
}

export type CurseForgeGetModFilesResponse = {
    data: CurseForgeFile[]
    pagination: CurseForgePagination
}

export type CurseForgeGetModResponse = {
    data: CurseForgeMod
}

export type CurseForgeGetModsResponse = {
    data: CurseForgeMod[]
}

export type CurseForgeGetVersionTypesResponse = {
    data: CurseForgeGameVersionType[]
}

export type CurseForgeGetVersionsResponseV1 = {
    data: CurseForgeGameVersionsByType[]
}

export type CurseForgeGetVersionsResponseV2 = {
    data: CurseForgeGameVersionsByType2[]
}

export type CurseForgeGetFeaturedModsRequestBody = {
    gameId: number
    excludedModIds: number[]
    gameVersionTypeId: number | null
}

export type CurseForgeGetFingerprintMatchesRequestBody = {
    fingerprints: number[]
}

export type CurseForgeGetFuzzyMatchesRequestBody = {
    gameId: number
    fingerprints: CurseForgeFolderFingerprint[]
}

export type CurseForgeGetModFilesRequestBody = {
    fileIds: number[]
}

export type CurseForgeGetModsByIdsListRequestBody = {
    modIds: number[]
    filterPcOnly: boolean | null
}

export enum CurseForgeHashAlgo {
    Sha1 = 1,
    Md5 = 2,
}

export type CurseForgeMinecraftGameVersion = {
    id: number
    gameVersionId: number
    versionString: string
    jarDownloadUrl: string
    jsonDownloadUrl: string
    approved: boolean
    dateModified: string
    gameVersionTypeId: number
    gameVersionStatus: CurseForgeGameVersionStatus
    gameVersionTypeStatus: CurseForgeGameVersionTypeStatus
}

export type CurseForgeMinecraftModLoaderIndex = {
    name: string
    gameVersion: string
    latest: boolean
    recommended: boolean
    dateModified: string
    type: CurseForgeModLoaderType
}

export type CurseForgeMinecraftModLoaderVersion = {
    id: number
    gameVersionId: number
    minecraftGameVersionId: number
    forgeVersion: string
    name: string
    type: CurseForgeModLoaderType
    downloadUrl: string
    filename: string
    installMethod: CurseForgeModLoaderInstallMethod
    latest: boolean
    recommended: boolean
    approved: boolean
    dateModified: string
    mavenVersionString: string
    versionJson: string
    librariesInstallLocation: string
    minecraftVersion: string
    additionalFilesJson: string
    modLoaderGameVersionId: number
    modLoaderGameVersionTypeId: number
    modLoaderGameVersionStatus: CurseForgeGameVersionStatus
    modLoaderGameVersionTypeStatus: CurseForgeGameVersionTypeStatus
    mcGameVersionId: number
    mcGameVersionTypeId: number
    mcGameVersionStatus: CurseForgeGameVersionStatus
    mcGameVersionTypeStatus: CurseForgeGameVersionTypeStatus
    installProfileJson: string
}

export type CurseForgeMod = {
    id: number
    gameId: number
    name: string
    slug: string
    links: CurseForgeModLinks
    summary: string
    status: CurseForgeModStatus
    downloadCount: number
    isFeatured: boolean
    primaryCategoryId: number
    categories: CurseForgeCategory[]
    classId: number | null
    authors: CurseForgeModAuthor[]
    logo: CurseForgeModAsset
    screenshots: CurseForgeModAsset[]
    mainFileId: number
    latestFiles: CurseForgeFile[]
    latestFilesIndexes: CurseForgeFileIndex[]
    latestEarlyAccessFilesIndexes: CurseForgeFileIndex[]
    dateCreated: string
    dateModified: string
    dateReleased: string
    allowModDistribution: boolean | null
    gamePopularityRank: number
    isAvailable: boolean
    thumbsUpCount: number
    rating: number | null
}

export type CurseForgeModAsset = {
    id: number
    modId: number
    title: string
    description: string
    thumbnailUrl: string
    url: string
}

export type CurseForgeModAuthor = {
    id: number
    name: string
    url: string
}

export type CurseForgeModLinks = {
    websiteUrl: string
    wikiUrl: string
    issuesUrl: string
    sourceUrl: string
}

export enum CurseForgeModLoaderInstallMethod {
    ForgeInstaller = 1,
    ForgeJarInstall = 2,
    ForgeInstaller_v2 = 3,
}

export enum CurseForgeModLoaderType {
    Any = 0,
    Forge = 1,
    Cauldron = 2,
    LiteLoader = 3,
    Fabric = 4,
    Quilt = 5,
    NeoForge = 6,
}

export enum CurseForgeModsSearchSortField {
    Featured = 1,
    Popularity = 2,
    LastUpdated = 3,
    Name = 4,
    Author = 5,
    TotalDownloads = 6,
    Category = 7,
    GameVersion = 8,
    EarlyAccess = 9,
    FeaturedReleased = 10,
    ReleasedDate = 11,
    Rating = 12,
}

export enum CurseForgeModStatus {
    New = 1,
    ChangesRequired = 2,
    UnderSoftReview = 3,
    Approved = 4,
    Rejected = 5,
    ChangesMade = 6,
    Inactive = 7,
    Abandoned = 8,
    Deleted = 9,
    UnderReview = 10,
}

export type CurseForgePagination = {
    index: number
    pageSize: number
    resultCount: number
    totalCount: number
}

export type CurseForgeSearchModsResponse = {
    data: CurseForgeMod[]
    pagination: CurseForgePagination
}

export type CurseForgeSortableGameVersion = {
    gameVersionName: string
    gameVersionPadded: string
    gameVersion: string
    gameVersionReleaseDate: string
    gameVersionTypeId: number | null
}

export type CurseForgeStringResponse = {
    data: string
}
```
