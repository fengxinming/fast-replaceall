import transIndex from 'celia/transIndex';
import isString from 'celia/isString';
import isFunction from 'celia/isFunction';

/**
 * 字符串替换函数
 *
 * @param {string} str
 * @param {string} substr
 * @param {any} replacement
 * @param {object=} options
 */
export default function replaceAll(str, substr, replacement, options) {
  if (!isString(str)
      || !(isString(substr) && substr.length > 0)) {
    return str;
  }

  const { fromIndex, caseInsensitive } = options || {};

  const totalLen = str.length;
  const substrLen = substr.length;

  let fromIndex2 = transIndex(fromIndex, totalLen);
  let cursor = 0; // 游标从0开始
  let result = ''; // 返回新字符串
  const replacer = isFunction(replacement)
    ? (v, offset) => v(str.substr(offset, substrLen), offset, str)
    : (v) => v; // 替换函数
  let matchedOffset = -1; // 匹配字符偏移量

  // 找到匹配字符串的位置
  let lamb;
  let finder;
  if (caseInsensitive) {
    lamb = str.toLowerCase();
    finder = (s, sub, i) => s.indexOf(sub.toLowerCase(), i);
  }
  else {
    lamb = str;
    finder = (s, sub, i) => s.indexOf(sub, i);
  }
  // eslint-disable-next-line no-cond-assign
  while ((matchedOffset = finder(lamb, substr, fromIndex2)) > -1) {
    result += str.slice(cursor, matchedOffset);
    result += replacer(replacement, matchedOffset);

    fromIndex2 = matchedOffset + substrLen;
    cursor = fromIndex2;
  }

  if (cursor === 0) {
    return str;
  }

  return result + str.slice(fromIndex2);
}
