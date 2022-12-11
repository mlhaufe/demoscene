/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Point, Vector } from './vector2/index.mjs';

/**
 * @template T
 */
export class Disk {
    #position; #velocity; #radius; #item;

    /**
     * @typeParam T
     * @param {object} options 
     * @param {Point} options.position
     * @param {Vector} options.velocity
     * @param {number} options.radius
     * @param {T} options.item
     */
    constructor({ position, velocity, radius, item }) {
        this.#position = position;
        this.#velocity = velocity;
        this.#radius = radius;
        this.#item = item;
    }

    get item() { return this.#item; }
    get position() { return this.#position; }
    set position(value) { this.#position = value; }
    get radius() { return this.#radius; }
    get velocity() { return this.#velocity; }
    set velocity(value) { this.#velocity = value; }
}