# fast-replaceall 

[![npm package](https://nodei.co/npm/fast-replaceall.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-replaceall)

[![NPM version](https://img.shields.io/npm/v/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![](https://data.jsdelivr.com/v1/package/npm/fast-replaceall/badge)](https://www.jsdelivr.com/package/npm/fast-replaceall)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Friendly-blue?style=flat-square)

> **High-performance string replacement tool**  
> Supports global replacement, case-insensitive mode, start index control, and functional replacement compatible with native `String.replace`.

## [中文](README_zh-CN.md) ｜ English

---

## Features 🌟
- **Global Replacement**: Achieve full replacement without regular expressions
- **Flexible Options**: Customize with `caseInsensitive` and `fromIndex` parameters
- **Functional Replacement**: Use callback functions for dynamic logic
- **TypeScript Support**: Full type definitions included
- **Lightweight**: Only 1KB (uncompressed), zero dependencies

---

## Installation 💻
```bash
npm add fast-replaceall
```
```bash
pnpm add fast-replaceall
```
```bash
yarn add fast-replaceall
```
```bash
bun add fast-replaceall
```
```html
<script src="https://cdn.jsdelivr.net/npm/fast-replaceall/dist/index.umd.js"></script>
```

---

## Usage Examples 🚀

### Basic Replacement
```javascript
import replaceAll from 'fast-replaceall';

const text = 'The quick brown fox jumps over the lazy dog';
console.log(replaceAll(text, 'dog', 'monkey'));
// Output: The quick brown fox jumps over the lazy monkey
```

### Functional Replacement
```javascript
replaceAll('123-456', '-', (match, offset) => `_${offset}_`);
// Output: 123_0_456
```

### Custom Options
```javascript
// Case-insensitive replacement
replaceAll('Apple apple', 'APPLE', 'ORANGE', { caseInsensitive: true });
// Output: ORANGE ORANGE

// Start replacing from index 2
replaceAll('aaaa', 'a', '*', { fromIndex: 2 });
// Output: aa**
```

---

## API Documentation 📖

### Function Signature
```typescript
export default function replaceAll(
  str: string,
  substr: string,
  replacement: string | ReplacementFn,
  options?: ReplaceAllOptions
): string;
```

### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `str` | `string` | Original string to operate on |
| `substr` | `string` | Substring to match |
| `replacement` | `string | ReplacementFn` | Replacement value or callback (receives match, offset, and original string) |
| `options` | `ReplaceAllOptions` | Optional configuration parameters |

### Configuration Options
```typescript
interface ReplaceAllOptions {
  fromIndex?: number; // Start index (default 0, supports negative values)
  caseInsensitive?: boolean; // Case-insensitive matching (default false)
}

type ReplacementFn = (match: string, offset: number, str: string) => string;
```

---

## Comparison with Native Methods 🎯

| Requirement | `fast-replaceall` | `String.prototype.replace` |
|-------------|-------------------|----------------------------|
| Global Replacement | Built-in support | Requires `/g` flag in regex |
| Case-insensitive | `caseInsensitive` option | Requires `i` flag in regex |
| Start Index Control | `fromIndex` parameter | Requires manual string slicing |
| Functional Replacement | Full support | Requires regex + function |

```text
======== Benchmark Results ========

【String.prototype.replace】 x 6,635,525 ops/sec ±2.58% (87 runs sampled)
【String.prototype.replaceAll】 x 5,636,302 ops/sec ±0.58% (94 runs sampled)
【replaceAll】 x 40,483,612 ops/sec ±0.67% (94 runs sampled)
The fastest is 【replaceAll】

======== Benchmark End ========
```

---

## Development & Contribution 🛠️

### Running Tests
```bash
npm test
# or
vitest run
```

### Contribution Guide
1. Fork the repository and create a new branch
2. Implement features or fix issues
3. Add test cases
4. Ensure all tests pass
5. Submit a Pull Request

---

## License 📄
MIT License

---

### Project Inspiration
Enhanced over native `String.replace` to address:
- **No regex required**: Direct string-based matching
- **Intuitive parameters**: Replace complex regex flags with clear options
- **Edge-case handling**: Support special empty-string replacement (configurable error throwing or formatted output)
