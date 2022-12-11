/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Move } from './index.mjs';

export class Rock extends Move {
    /** 
     * @override
     * @param {Move} move
     */
    beats(move) { return move.isScissors(); }
    
    /** @override */
    isRock() { return true; }
}