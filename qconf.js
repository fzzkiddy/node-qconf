/*
 * @Date: 2025-09-09 10:29:44
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-10-14 10:59:27
 * @FilePath: /node-qconf/qconf.js
 * @Description: 
 */
// 直接使用模拟实现，不尝试加载原生模块
// 这是因为在 arm64 架构上无法加载为 x86_64 编译的原生模块
console.log('=== 使用 qconf 模拟实现 ===');
process.on('uncaughtException', (err) => {
  console.error('捕获到未处理的异常:', err);
});

const qconf = {
  version: function() {
    return '模拟版本 1.0.0';
  },
  getConf: function(path) {
    console.log(`模拟调用 getConf: ${path}`);
    return `模拟配置值 for ${path}`;
  },
  getBatchKeys: function(path, prefix) {
    console.log(`模拟调用 getBatchKeys: ${path}, ${prefix}`);
    return [`${prefix}1`, `${prefix}2`, `${prefix}3`];
  },
  getBatchConf: function(path) {
    console.log(`模拟调用 getBatchConf: ${path}`);
    return { key1: 'value1', key2: 'value2' };
  },
  getAllHost: function(path) {
    console.log(`模拟调用 getAllHost: ${path}`);
    return ['host1', 'host2'];
  },
  getHost: function(path) {
    console.log(`模拟调用 getHost: ${path}`);
    return 'host1';
  }
};

module.exports = qconf;