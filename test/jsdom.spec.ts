// @vitest-environment jsdom
/* eslint-disable antfu/no-import-dist */

import { getCurRuntime, isJSDOM } from '../dist'

describe('jsdom env', () => {
  it('getCurRuntime', () => {
    expect(getCurRuntime()).toMatchInlineSnapshot(`
      {
        "isBrowser": false,
        "isBun": false,
        "isDeno": false,
        "isJSDOM": true,
        "isNode": true,
        "isWebWorker": false,
      }
    `)
  })
  it('isJSDOM', () => {
    expect(isJSDOM()).toBe(true)
  })
})
