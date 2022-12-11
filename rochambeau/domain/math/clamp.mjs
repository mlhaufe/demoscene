/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

/**
 * Returns the provided value if between the min/max.
 * Otherwise returns min or max if the value is beyond the range
 * 
 * @param {number} value
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);