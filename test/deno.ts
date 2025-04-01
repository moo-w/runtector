/* eslint-disable antfu/no-import-dist */
/* eslint-disable no-console */

import { getCurRuntime, isDeno } from '../dist/index.js'

console.log(`
==> Deno:
      - Deno version: ${Deno.version}
      - getCurRuntime: ${JSON.stringify(getCurRuntime())}
      - isDeno: ${isDeno()}`)
