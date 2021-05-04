const replaceAll = require('../dist/cjs');

// 测试 max
const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

module.exports = {
  '【String.prototype.replace】': function () {
    str.replace(/dog/g, 'monkey');
  },

  '【replaceAll】': function () {
    replaceAll(str, 'monkey');
  }
};
