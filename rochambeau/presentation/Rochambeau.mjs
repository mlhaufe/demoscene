/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

import { DiskPresenter } from '../adapters/DiskPresenter.mjs';
import { checkCollisions, createRandomDisks, renderDisks, updateDiskPositions } from '../application/usecase/index.mjs';
import { DiskRepository } from '../data/DiskRepository.mjs';

export class Rochambeau {
    #repository = new DiskRepository();
    #presenter;
    #checkCollisions; #createRandomDisks; #updatePositions; #render;

    constructor() {
        Object.assign(document.body.style, { height: '100vh', margin: '0' });
        this.#presenter = new DiskPresenter({ elContainer: document.body });

        const [presenter, repository] = [this.#presenter, this.#repository];
        this.#checkCollisions = checkCollisions({ presenter, repository });
        this.#createRandomDisks = createRandomDisks({
            diskCount: 27, diskRadius: 20, presenter, repository
        });
        this.#updatePositions = updateDiskPositions({ repository });
        this.#render = renderDisks({ repository, presenter });

        this.#createRandomDisks();

        window.addEventListener('resize', () => Object.assign(presenter, {
            height: document.body.offsetHeight,
            width: document.body.offsetWidth
        }));
    }

    run() {
        //requestAnimationFrame(() => this.run());
        this.#presenter.clear();
        this.#checkCollisions();
        this.#updatePositions();
        this.#render();
    }
}