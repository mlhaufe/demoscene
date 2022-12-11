import { Disk } from "../domain/Disk.mjs"

export class AbstractDiskRepository {
    constructor() {
        if(new.target === AbstractDiskRepository)
            throw new Error('This class is abstract')
    }
    addDisk(disk: Disk): void { throw new Error('Not implemented')}
    getDisks(): Disk[] { throw new Error('Not implemented')}
}
