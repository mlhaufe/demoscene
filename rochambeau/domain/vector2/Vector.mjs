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
export class Vector {
    #a; #b;
    /**
     * @param {object} components
     * @param {number} components.a
     * @param {number} components.b
     */
    constructor({ a, b }) {
        this.#a = a;
        this.#b = b;
    }

    /** @type {number} */
    get a() { return this.#a; }

    /** @type {number} */
    get b() { return this.#b; }

    /**
     * <a,b> + <c,d> = <a+c, b+d>
     * @param {Vector} vector 
     * @returns {Vector}
     */
    add({ a, b }) {
        return new Vector({ a: this.a + a, b: this.b + b });
    }

    /**
     * <a,b> angle <c,d> = atan2(b,a) - atan(c,d)
     * The angle is in radians between between -π and π
     * @param {Vector} vector 
     * @returns {number} Radians
     */
    angle({ a: c, b: d }) {
        return Math.atan2(d, c) - Math.atan2(this.b, this.a);
    }

    /**
     * <a,b> dot <c,d> = a * c + b * d
     * @param {Vector} vector 
     * @returns {number}
     */
    dot({ a: c, b: d }) {
        return this.a * c + this.b * d;
    }

    /**
     * <a,b> = <c,d> => <a = c, b = d>
     * @param {Vector} vector 
     * @returns 
     */
    equals({ a: c, b: d }) {
        return this.a == c && this.b == d;
    }

    /**
     * v1 ⊥ v2
     * @param {Vector} vector 
     * @returns {boolean}
     */
    isOrthogonal(vector) { return this.dot(vector) === 0; }

    /**
     * @param {Vector} vector 
     * @returns {boolean}
     */
    isPerpendicular(vector) { return this.isOrthogonal(vector); }

    /**
     * || v1 ||
     * @returns {number} 
     */
    magnitude() { return (this.a ** 2 + this.b ** 2) ** (1 / 2); }

    /**
     * 
     * @returns {Vector}
     */
    normalize() {
        return this.scale(1 / this.magnitude());
    }

    /**
     * 
     * @param {Vector} ontoVector 
     * @returns {number}
     */
    projectScalar(ontoVector) {
        return ontoVector.dot(this) / ontoVector.magnitude();
    }

    /**
     * 
     * @param {Vector} ontoVector 
     * @returns {Vector}
     */
    projectVector(ontoVector) {
        return ontoVector.unit().scale(this.projectScalar(ontoVector));
    }

    /**
     * n * <a,b> = <n * a, n * b>
     * @param {number} n 
     * @returns {Vector}
     */
    scale(n) {
        return new Vector({ a: this.a * n, b: this.b * n });
    }

    /**
     * <a,b> - <c,d> = <a-c,b-d>
     * @param {Vector} vector 
     * @returns {Vector}
     */
    sub({ a: c, b: d }) {
        return new Vector({ a: this.a - c, b: this.b - d });
    }

    /**
     * 
     * @returns {Vector}
     */
    unit() {
        const { a, b } = this;

        return new Vector({ a: a / Math.abs(a), b: b / Math.abs(b) });
    }
}