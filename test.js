/*
 * @Date: 2025-09-09 10:29:44
 * @LastEditors: kiddy fanzhenzhen@blued.com
 * @LastEditTime: 2025-10-28 10:13:45
 * @FilePath: /node-qconf/test.js
 * @Description: 
 */
var qconf = require('./qconf');

console.log('version:', qconf.version())
console.log('getConf:', qconf.getConf('/demo'))
console.log('getBatchKeys:', qconf.getBatchKeys('/backend', 'test'))
console.log('getBatchConf:', qconf.getBatchConf('/backend/umem/users'))
console.log('getAllHost:', qconf.getAllHost('/backend/umem/users'))
console.log('getHost:', qconf.getHost('/backend/umem/users'))
console.log('')
console.log('')

var i
var N = 10
var t0
var t1
console.log("Performance test:")

t0 = (new Date()).getTime()
for (i = 0; i < N; i++) {
  qconf.getConf('/demo')
}
t1 = (new Date()).getTime()
console.log('getConf:', (t1 - t0) / N, 'ms/op')

t0 = (new Date()).getTime()
for (i = 0; i < N; i++) {
  qconf.getBatchKeys('/backend', 'test')
}
t1 = (new Date()).getTime()
console.log('getBatchKeys:', (t1 - t0) / N, 'ms/op')

t0 = (new Date()).getTime()
for (i = 0; i < N; i++) {
  qconf.getBatchConf('/backend/umem/users')
}
t1 = (new Date()).getTime()
console.log('getBatchConf:', (t1 - t0) / N, 'ms/op')

t0 = (new Date()).getTime()
for (i = 0; i < N; i++) {
  qconf.getAllHost('/backend/umem/users')
}
t1 = (new Date()).getTime()
console.log('getAllHost:', (t1 - t0) / N, 'ms/op')

t0 = (new Date()).getTime()
for (i = 0; i < N; i++) {
  qconf.getHost('/backend/umem/users')
}
t1 = (new Date()).getTime()
console.log('getHost:', (t1 - t0) / N, 'ms/op')
