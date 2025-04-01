// @vitest-environment node
/* eslint-disable antfu/no-import-dist */

import { getCurRuntime, isNode } from '../dist'

describe('node env', () => {
  it('getCurRuntime', () => {
    expect(getCurRuntime()).toMatchInlineSnapshot(`
      {
        "isBrowser": false,
        "isBun": false,
        "isDeno": false,
        "isHappyDOM": false,
        "isJSDOM": false,
        "isNode": true,
        "isWebWorker": false,
      }
    `)
  })
  it('isNode', () => {
    expect(isNode()).toBe(true)
  })
})
