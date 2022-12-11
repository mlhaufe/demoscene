/*!
 * @license
 * Copyright (C) 2022 Michael L Haufe
 * SPDX-License-Identifier: AGPL-3.0-only
 * @see <https://spdx.org/licenses/AGPL-3.0-only.html>
 */

// @ts-check

import { IDiskRepository } from '../AbstractDiskRepository.mjs';

export const updateDiskPositions = ({ repository }: { repository: IDiskRepository }) =>
    () => repository.getDisks().forEach(disk => disk.position = disk.position.add(disk.velocity));