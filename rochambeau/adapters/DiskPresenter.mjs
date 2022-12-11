/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Presenter } from '../application/Presenter.mjs';
import { AssetRepository } from '../data/AssetRepository.mjs';
import { Disk } from '../domain/Disk.mjs';
import { Move } from '../domain/rps/index.mjs';

export class DiskPresenter extends Presenter implements IPresenter<Disk<Rps>> {
    #assetRepo = new AssetRepository();
    #el; #ctx;

    constructor({ elContainer }: { elContainer: HTMLElement }) {
        this.#el = Object.assign(document.createElement('canvas'), {
            height: elContainer.offsetHeight,
            width: elContainer.offsetWidth
        });
        this.#ctx = this.#el.getContext('2d');
        elContainer.appendChild(this.#el);
    }

    get height() { return this.#el.height; }
    set height(value) { this.#el.height = value; }

    get width() { return this.#el.width; }
    set width(value) { this.#el.width = value; }

    clear() {
        const { width, height } = this.#el;
        this.#ctx?.clearRect(0, 0, width, height);
    }

    async present(disk: Disk<Rps>): Promise<void> {
        const { item, radius, position: { x, y } } = disk,
            diskBitmap = await this.#assetRepo.getAsset({
                name: item.constructor.name.toLowerCase(),
                height: radius * 2,
                width: radius * 2
            });

        this.#ctx?.drawImage(diskBitmap, x, y);
    }
}