/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

import { Vector } from './index.mjs';

/**
 * 
 */
export class Point extends Vector {
    /**
     * @param {object} components
     * @param {number} components.x
     * @param {number} components.y 
     */
    constructor({ x: a, y: b }) {
        super({ a, b });
    }

    get x() { return super.a; }
    get y() { return super.b; }

    /**
     * @override
     * @param {Vector} vector
     * @returns {Vector}
     */
    add(vector) {
        const { a: x, b: y } = super.add(vector);

        return new Point({ x, y });
    }

    /**
     * @override
     * @param {Vector} vector 
     * @returns {Vector}
     */
    sub(vector) {
        const { a: x, b: y } = super.sub(vector);

        return new Point({ x, y });
    }
}