/* eslint-disable antfu/no-import-dist */
/* eslint-disable no-console */

import { getCurRuntime, isBun } from '../dist'

console.log(`
==> Bun:
      - Bun version: ${Bun.version}
      - getCurRuntime: ${JSON.stringify(getCurRuntime())}
      - isBun: ${isBun()}`)
