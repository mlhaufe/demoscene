/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

/**
 * Represents a move
 * @abstract
 */
export class Move {
    constructor() { if(new.target === Move) throw new Error('This class is abstract') }
    /**
     * @abstract
     * @param {Move} move 
     * @returns {boolean}
     */
    beats(move) { throw new Error('Not implemented') }
    isRock() { return false; }
    isPaper() { return false; }
    isScissors() { return false; }
}