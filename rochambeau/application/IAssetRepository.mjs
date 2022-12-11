export type AssetRepositoryOptions = {name: string, height: number, width: number}

export interface IAssetRepository {
    getAsset({name, height, width}: AssetRepositoryOptions): Promise<ImageBitmap>
}