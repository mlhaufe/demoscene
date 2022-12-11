/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

/**
 * Returns a random integer within the specified range
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const randInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;