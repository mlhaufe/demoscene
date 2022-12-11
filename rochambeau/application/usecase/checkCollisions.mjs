/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

import { Vector } from '../../domain/vector2/index.mjs';
import { DiskPresenter, IDiskPresenter } from '../IDiskPresenter.mjs';
import { AbstractDiskRepository, IDiskRepository } from '../AbstractDiskRepository.mjs';
import { boundaryCheck } from './boundaryCheck.mjs';


/**
 * 
 * @param {object} options 
 * @param {AbstractDiskPresenter} presenter
 * @param {AbstractDiskRepository} repository
 * @returns 
 */
export const checkCollisions = ({repository, presenter}) =>
    () => {
        const {width: bx, height: by} = presenter,
            boundsCheck = boundaryCheck({ boundingHeight: by, boundingWidth: bx });
        repo.getDisks().forEach(disk => {
            boundsCheck({ disk });
            repo.getDisks().forEach(otherDisk => {
                if (disk === otherDisk)
                    return;
                const [p1, p2] = [disk.position, otherDisk.position],
                    direction = new Vector({ a: p2.x - p1.x, b: p2.y - p1.y });

                if (direction.magnitude() <= disk.radius + otherDisk.radius) {
                    const u = direction.normalize(),
                        [v1, v2] = [disk.velocity, otherDisk.velocity];

                    if (v1.dot(u) - v2.dot(u) > 0) {
                        const v1n = u.scale(v1.dot(u)),
                            v2n = u.scale(v2.dot(u)),
                            v1t = v1.add(v1n.scale(-1)),
                            v2t = v2.add(v2n.scale(-1));
                        disk.velocity = v2n.add(v1t);
                        otherDisk.velocity = v1n.add(v2t);
                    }
                }
            });
        });
    };