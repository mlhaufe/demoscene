/**
 * @template T
 * @template U
 */
export class Adapter {
    constructor() {
        if(new.target === Adapter)
            throw new Error("This class is abstract")
    }
    /** @param {T} source */
    from(source) { throw new Error("Not implemented") }
    /**@param {U} target */
    to(target) { throw new Error("Not implemented") }
}