/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Disk } from '../../domain/Disk.mjs';
import { Move } from '../../domain/rps/index.mjs';
import { Vector } from '../../domain/vector2/index.mjs';

/**
 * 
 * @param {number} b 
 * @param {number} d 
 * @param {number} dxy 
 * @param {number} pxy 
 * @param {number} r 
 * @returns {boolean}
 */
const check = (b, d, dxy, pxy, r) =>
    b > d && ((dxy < 0 && pxy - r <=  0) || (dxy > 0 && pxy + r >= b));

/**
 * keep disks inside bounding box by bouncing off the edges
 * @param {object} options
 * @param {number} options.boundingHeight
 * @param {number} options.boundingWidth
 */
export const boundaryCheck = ({ boundingHeight: by, boundingWidth: bx }) =>
    /**
     * @param {object} params 
     * @param {Disk<Move>} params.disk
     */
    ({ disk }) => {
        const r = disk.radius,
            d = 2 * r,
            { a: dx, b: dy } = disk.velocity,
            { x: px, y: py } = disk.position;

        if(check(bx,d,dx,px,r))
            disk.velocity = new Vector({ a: -dx, b: dy });

        if(check(by,d,dy,py,r))
            disk.velocity = new Vector({ a: dx, b: -dy });
    };