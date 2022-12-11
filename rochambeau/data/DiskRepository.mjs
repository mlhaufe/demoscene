/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */
import { IDiskRepository } from '../application/AbstractDiskRepository.mjs';
import { Disk } from '../domain/Disk.mjs';
import { Rps } from '../domain/rps/index.mjs';

export class DiskRepository implements IDiskRepository {
    #disks: Disk<Rps>[] = [];
    addDisk(disk: Disk<Rps>) { this.#disks.push(disk); }
    getDisks(): Disk<Rps>[] { return [...this.#disks]; }
}