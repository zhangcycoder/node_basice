// 字符集（unicode） 字符编码
/**
 * 1. Buffer 操作二进制数据流的
 * <Buffer 74 65 73 74>
 * 2. 实例 类似于 整数数组（0-255  用16进制来表示的）的形式，大小是固定的；
 * 3. buffer  node代码不是在v8中申请的 是node中c++层面实现的 
//  * node的 buffer申请不是通过javscript实现的，而是c++实现的  
 * slab freeBSD linux  链表
 */

// 创建一个长度为10且用0x1填充的buffer
// const buf = Buffer.alloc(10, 1)
// console.log(buf)

// const buf2 = Buffer.from('test', 'utf8')//ucs2 utf-16的编码方式
// console.log(buf2, 'buf2')


// const EventEmitter = require('events')

// class CustomEvent extends EventEmitter { };
// const ce = new CustomEvent()
// const fun1 = () => {
//     console.log('fn1')
// }
// const fin2 = () => {
//     console.log('fn2')
// }
// ce.on('test', fun1)
// ce.on('test', fin2)

// console.log(ce.listenerCount('test'))
// 1. 事件 继承自EventEmitter的实例
// 前端，dom元素  click约定好的
// 2.后端：事件名称自定义
// 3. 后端通过emit('name')


const fs = require('fs')
const content = Buffer.from('this is a  11111')

// fs.readFile('./index.md', 'utf-8', (error, data) => {
//     if (error) console.log(error,);
//     // console.log(data.toString())
//     console.log(data)
//     fs.writeFile('./index.md', content, 'utf8', (err) => console.log(err, 'err'))
// })
// 查看信息
// fs.stat('./index.md', (err, data) => {
//     if (err) {
//         console.log('不存在')
//         return
//     }
//     console.log(data.atime)
//     console.log(data.isDirectory())
//     console.log(data.isFile())
// });
// 修改名称    
fs.rename('./index.js', 'fs.js', (err) => console.log(err))
// 删除文件
// fs.unlink('test.md', (e) => { console.log(1) })

// 文件夹相关的操作
// fs.readdir('./', (err, files) => {
//     console.log(err, 'err')
//     console.log(files, 'files')

// })
// console.log(__dirname)
// console.log(__filename)


// fs.mkdir('test2', (err, data) => console.log(err, data))
// fs.rmdir('test2', (err) => console.log(err))

/**
 * 文件新增  writeFile()
 * 文件删除 unlink()
 * 文件名修改 rename()
 * 查找 stat()
 * 文件夹新增 mkdir()
 * 文件夹删除 rmdir()
 */

// fs.watch('./', { recursive: true }, (eventType, name) => {
//     console.log(eventType, name)

// })