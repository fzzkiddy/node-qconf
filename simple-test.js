// 简单测试文件
const qconf = require('./qconf');

console.log('测试 qconf 模拟实现:');
console.log('version:', qconf.version());
console.log('getConf:', qconf.getConf('/demo'));
console.log('getBatchKeys:', qconf.getBatchKeys('/backend', 'test'));
console.log('getBatchConf:', qconf.getBatchConf('/backend/umem/users'));
console.log('getAllHost:', qconf.getAllHost('/backend/umem/users'));
console.log('getHost:', qconf.getHost('/backend/umem/users'));