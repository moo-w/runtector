/* eslint-disable node/prefer-global/process */
export function isBrowser() {
  return typeof window !== 'undefined'
    && typeof document !== 'undefined'
    && !isJSDOM()
    && !isHappyDOM()
}

export function isNode() {
  return typeof process !== 'undefined'
    && process.versions != null
    && process.versions.node != null
    && !isBun()
    && !isDeno()
}

export function isWebWorker() {
  return typeof globalThis === 'object'
    && globalThis.constructor
    && globalThis.constructor.name === 'DedicatedWorkerGlobalScope'
}

export function isDeno() {
  return typeof Deno !== 'undefined'
    && Deno.version != null
    && Deno.version.deno != null
}

/**
 * @see {@link https://bun.sh/guides/util/detect-bun}
 */
export function isBun() {
  return (typeof Bun !== 'undefined'
    && Bun.version != null
    && Bun.version.bun != null)
  || (typeof process !== 'undefined'
    && process.versions != null
    && process.versions.bun != null)
}

export function isJSDOM() {
  return (typeof window !== 'undefined' && window.name === 'nodejs')
    || (typeof navigator !== 'undefined'
      && 'userAgent' in navigator
      && typeof navigator.userAgent === 'string'
      && (navigator.userAgent.includes('Node.js')
        || navigator.userAgent.includes('jsdom')))
}

export function isHappyDOM() {
  return (typeof window !== 'undefined' && window.happyDOM != null)
    || (typeof navigator !== 'undefined'
      && 'userAgent' in navigator
      && typeof navigator.userAgent === 'string'
      && navigator.userAgent.includes('Happy DOM'))
}

export enum Runtime {
  Browser = 'browser',
  Node = 'node',
  WebWorker = 'webworker',
  Deno = 'deno',
  Bun = 'bun',
  JSDOM = 'jsdom',
  Unknown = 'unknown',
}

export function getCurRuntime() {
  return {
    isBrowser: isBrowser(),
    isNode: isNode(),
    isWebWorker: isWebWorker(),
    isDeno: isDeno(),
    isBun: isBun(),
    isJSDOM: isJSDOM(),
    isHappyDOM: isHappyDOM(),
  }
}
