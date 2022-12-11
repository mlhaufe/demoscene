/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

import { Disk } from '../../domain/Disk.mjs';
import { clamp, randInt } from '../../domain/math/index.mjs';
import { Paper, Rock, Scissors } from '../../domain/rps/index.mjs';
import { Point, Vector } from '../../domain/vector2/index.mjs';
import { IDiskPresenter } from '../IDiskPresenter.mjs';
import { IDiskRepository } from '../AbstractDiskRepository.mjs';

export interface CreateOptions {
    presenter: IDiskPresenter
    diskCount: number
    diskRadius: number
    repository: IDiskRepository
}
export const createRandomDisks = (options: CreateOptions) =>
    () => {
        const choices = [Rock, Paper, Scissors],
            {diskCount, diskRadius, repository: repo, presenter: {height, width}} = options,
         disks = Array.from({ length: diskCount }, () => new Disk({
            item: new choices[randInt(0, choices.length - 1)](),
            position: new Point({
                x: clamp(randInt(0, width), 0, width),
                y: clamp(randInt(0, height), 0, height)
            }),
            radius: diskRadius,
            velocity: new Vector({ a: randInt(0, 10), b: randInt(0, 10) })
        }));

        disks.forEach(disk => repo.addDisk(disk));
    };