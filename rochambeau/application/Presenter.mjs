/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

/**
 * 
 */
export class Presenter {
    constructor() {
        if (new.target === Presenter)
            throw new Error('This class is abstract')
    }
    /**
     * @abstract
     * @type {number}
     */
    get height() {
        throw new Error('Not implemented')
    }
    /**
     * @abstract
     * @type {number}
     */
    get width() { throw new Error('Not implemented') }
    /**
     * @abstract
     * @param {*} data 
     */
    present(data) { throw new Error('Not implemented') }
}