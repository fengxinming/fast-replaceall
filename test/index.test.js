import replaceAll from '../src/index';

it('测试 replaceAll 方法', () => {
  expect(replaceAll(
    'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
    'dog',
    'monkey'
  )).toBe('The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?');
  expect(replaceAll(null)).toBe(null);
  expect(replaceAll('这是一个字符串', null)).toBe('这是一个字符串');
  expect(replaceAll('这是一个字符串', '')).toBe('这是一个字符串');
  expect(replaceAll('这是一个字符串', 'dog', 'monkey')).toBe('这是一个字符串');
  expect(replaceAll('这是一个字符串', '一', (match, offset) => {
    expect(offset).toBe(2);
  })).toBe('这是undefined个字符串');
  expect(replaceAll('The quick brown fox jumps over the lazy dog. ', 'DOG', 'monkey', { caseInsensitive: true }))
    .toBe('The quick brown fox jumps over the lazy monkey. ');
  expect(replaceAll('The quick brown fox jumps over the lazy dog. ', 'DOG', 'monkey', { fromIndex: -1 }))
    .toBe('The quick brown fox jumps over the lazy dog. ');
  expect(replaceAll('The quick brown fox jumps over the lazy dog. ', 'dog', 'monkey', { fromIndex: -1 }))
    .toBe('The quick brown fox jumps over the lazy dog. ');
  expect(replaceAll('The quick brown fox jumps over the lazy dog. ', 'dog', 'monkey', { fromIndex: -5 }))
    .toBe('The quick brown fox jumps over the lazy monkey. ');
  expect(replaceAll(
    'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?',
    'dog',
    'monkey',
    { fromIndex: -44 }
  )).toBe('The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?');
});
