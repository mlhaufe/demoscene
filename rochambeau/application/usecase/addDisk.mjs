/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Disk } from '../../domain/Disk.mjs';
import { Rps } from '../../domain/rps/index.mjs';
import { IDiskRepository } from '../AbstractDiskRepository.mjs';

/**
 * 
 * @param {*} repo 
 * @returns 
 */
export const addDisk = (repo: IDiskRepository) =>
    (disk: Disk<Rps>) => repo.addDisk(disk);