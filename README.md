# fast-replaceall

[![npm package](https://nodei.co/npm/fast-replaceall.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-replaceall)

> Similar to `String#replace()`, but supports replacing multiple matches. You could achieve something similar by putting the string in a RegExp constructor with the global flag and passing it to `String#replace()`, but you would then have to first escape the string anyways.

[![NPM version](https://img.shields.io/npm/v/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![](https://data.jsdelivr.com/v1/package/npm/fast-replaceall/badge)](https://www.jsdelivr.com/package/npm/fast-replaceall)


## Installation

```bash
npm install fast-replaceall --save
```


## Usage

```js
const replaceAll = require('fast-replaceall');
 
const string = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
 
replaceAll(string, 'dog', 'monkey');
//=> 'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?'
```


## API

```ts
export default function (
	str: string,
	substr: string,
	replacement: (match: string, offset: number, str: string) => string | any,
	options?: object
): string
```

Returns a new string with all `substr` matches replaced with `replacement`.

- `str` `<string>` String to work on.
- `substr` `<string>` String to match in input.
- `replacement` `<string | function>` Replacement for substr matches.
- `options` `[object]`
  - `fromIndex` `[number]` Default `0`. Index at which to start replacing.
  - `caseInsensitive` `[boolean]` Default `false`. Whether or not substring matching should be case-insensitive.
