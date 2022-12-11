/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */
import { AssetRepositoryOptions, IAssetRepository } from '../application/IAssetRepository.mjs';

export class AssetRepository implements IAssetRepository {
    #cache = new Map<string, ImageBitmap>();
    async getAsset({ name, height, width }: AssetRepositoryOptions): Promise<ImageBitmap> {
        if(this.#cache.has(name))
            return this.#cache.get(name)!;

        const response = await fetch(`/data/assets/${name}.png`);

        if(!response.ok)
            throw new Error(response.statusText);

        const bmp = await createImageBitmap(
            await response.blob(),
            {resizeHeight: height, resizeWidth: width}
        );

        this.#cache.set(name, bmp);

        return this.#cache.get(name)!;
    }
}