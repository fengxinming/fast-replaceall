# fast-replaceall 

[![npm package](https://nodei.co/npm/fast-replaceall.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/fast-replaceall)

[![NPM version](https://img.shields.io/npm/v/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![NPM Downloads](https://img.shields.io/npm/dm/fast-replaceall.svg?style=flat)](https://npmjs.org/package/fast-replaceall)
[![](https://data.jsdelivr.com/v1/package/npm/fast-replaceall/badge)](https://www.jsdelivr.com/package/npm/fast-replaceall)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Friendly-blue?style=flat-square)

> **高性能字符串替换工具**  
> 支持多匹配替换、大小写不敏感模式、起始索引控制，兼容函数式替换和原生 `String.replace` 语法。

## 中文 ｜ [English](README.md)

---

## 特性 🌟
- **多匹配替换**：无需正则表达式即可实现全局替换
- **灵活选项**：支持 `caseInsensitive` 和 `fromIndex` 自定义参数
- **函数式替换**：通过回调函数实现动态替换逻辑
- **TypeScript 支持**：完整的类型定义文件
- **轻量级**：仅 1KB 未压缩，无依赖

---

## 安装 💻
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

## 使用示例 🚀

### 基础替换
```javascript
import replaceAll from 'fast-replaceall';

const text = 'The quick brown fox jumps over the lazy dog';
console.log(replaceAll(text, 'dog', 'monkey'));
// 输出：The quick brown fox jumps over the lazy monkey
```

### 函数式替换
```javascript
replaceAll('123-456', '-', (match, offset) => `_${offset}_`);
// 输出：123_0_456
```

### 自定义选项
```javascript
// 大小写不敏感替换
replaceAll('Apple apple', 'APPLE', 'ORANGE', { caseInsensitive: true });
// 输出：ORANGE ORANGE

// 从索引2开始替换
replaceAll('aaaa', 'a', '*', { fromIndex: 2 });
// 输出：aa**
```

---

## API 文档 📖

### 函数签名
```typescript
export default function replaceAll(
  str: string,
  substr: string,
  replacement: string | ReplacementFn,
  options?: ReplaceAllOptions
): string;
```

### 参数说明
| 参数 | 类型 | 说明 |
|------|------|------|
| `str` | `string` | 需要操作的原始字符串 |
| `substr` | `string` | 需要匹配的子字符串 |
| `replacement` | `string | ReplacementFn` | 替换内容或回调函数（接收匹配内容、偏移量、原始字符串） |
| `options` | `ReplaceAllOptions` | 可选配置参数 |

### 配置选项
```typescript
interface ReplaceAllOptions {
  fromIndex?: number; // 起始索引（默认0，支持负数）
  caseInsensitive?: boolean; // 大小写不敏感（默认false）
}

type ReplacementFn = (match: string, offset: number, str: string) => string;
```

---

## 与原生方法对比 🎯

| 功能需求 | `fast-replaceall` | `String.prototype.replace` |
|----------|-------------------|---------------------------|
| 全局替换 | 直接支持 | 需配合正则全局标志 `/g` |
| 大小写不敏感 | 通过 `caseInsensitive` 选项 | 需正则 `i` 标志 |
| 起始索引控制 | `fromIndex` 参数 | 需手动截取字符串 |
| 函数式替换 | 完全支持 | 需正则配合函数 |

```
======== Benchmark start ========

【String.prototype.replace】 x 6,635,525 ops/sec ±2.58% (87 runs sampled)
【String.prototype.replaceAll】 x 5,636,302 ops/sec ±0.58% (94 runs sampled)
【replaceAll】 x 40,483,612 ops/sec ±0.67% (94 runs sampled)
The fastest is 【replaceAll】

======== Benchmark end ========
```

---

## 开发与贡献 🛠️

### 运行测试
```bash
npm test
```

### 贡献指南
1. Fork 仓库并创建新分支
2. 实现功能或修复问题
3. 添加测试用例
4. 确保通过所有测试
5. 提交 Pull Request

---

## 许可证 📄
MIT License

---

### 项目灵感
基于对原生 `String.replace` 的增强，解决以下痛点：
- **无需正则表达式**：直接使用字符串进行匹配
- **直观的选项参数**：替代复杂的正则标志组合
- **边界场景处理**：支持空字符串特殊替换（可配置抛出错误或特殊格式）
