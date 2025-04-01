# runtector

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

JavaScript runtime detector

## Installation

```bash
npm install runtector
```

## Usage

```javascript
import {
  getCurRuntime,
  isBrowser,
  isBun,
  isDeno,
  isHappyDOM,
  isJSDOM,
  isNode,
  isWebWorker,
} from 'runtector'
```

## API

- ### `isBrowser()`

    `true` if the current environment is a browser. If the environment is `jsdom` or `happy-dom` it will return `false`.

- ### `isNode()`

    `true` if the current environment is Node.js.

- ### `isWebWorker()`

    `true` if the current environment is a Web Worker.

- ### `isDeno()`

    `true` if the current environment is Deno.

- ### `isBun()`

    `true` if the current environment is Bun.

- ### `isJSDOM()`

    `true` if the current environment is JSDOM.

- ### `isHappyDOM()`

    `true` if the current environment is HappyDOM.

- ### `getCurRuntime()`

    Example:

    ```javascript
    // Node.js environment

    import { getCurRuntime } from 'runtector'

    console.log(getCurRuntime())
    /**
     * ===>
     * {
     *    isBrowser: false,
     *    isNode: true,
     *    isWebWorker: false,
     *    isDeno: false,
     *    isBun: false,
     *    isJSDOM: false,
     *    isHappyDOM: false
     *  }
     */
    ```

## License

[MIT](./LICENSE) License © [MOOZON WEI](https://github.com/moo-w)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/runtector?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/runtector
[npm-downloads-src]: https://img.shields.io/npm/dm/runtector?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/runtector
[bundle-src]: https://img.shields.io/bundlephobia/minzip/runtector?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=runtector
[license-src]: https://img.shields.io/github/license/moo-w/runtector.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/moo-w/runtector/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/runtector
