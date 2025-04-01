// @vitest-environment happy-dom
/* eslint-disable antfu/no-import-dist */

import { getCurRuntime, isHappyDOM } from '../dist'

describe('happydom env', () => {
  it('getCurRuntime', () => {
    expect(getCurRuntime()).toMatchInlineSnapshot(`
      {
        "isBrowser": true,
        "isBun": false,
        "isDeno": false,
        "isHappyDOM": true,
        "isJSDOM": false,
        "isNode": true,
        "isWebWorker": false,
      }
    `)
  })
  it('isHappyDOM', () => {
    expect(isHappyDOM()).toBe(true)
  })
})
