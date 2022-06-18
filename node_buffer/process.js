// console.log(process === global.process)
// console.log(process.cwd())
// // const fs  = require('fs')
// console.log(__dirname)
/**
 * 事件循环机制   
 * 事件循环他的机制就是在主线程运行的时候会产生对应的堆栈
 * 这是浏览器中的
 * 执行栈： callStack
 * 外部事件执行完后调用回调函数会把 所有 的回调函数都放到callback Queue
 * 之后会进入到事件循环内也就是EventLoop 最后进入执行栈中依次执行 
 * 
 * 宏任务: 在程序中按序执行 task->task(执行栈执行完一圈叫一个task);  回调函数 XHR 回调
 * 宏任务类型:setTimeout setIntval, U/I, rending, I/O setTmmidate(node独有的 )
 * 微任务类型: task完成之后,插入进来,promise process.nextTick(node独有 )
 * promise
 * process.nextTick();
 * 
 * 
 * 在node当
 * 一个task(每一个循环)所对应的步骤
 * timers 定时器
 * 待定回调
 * idle prepare 仅系统内部使用
 * 轮训:检索新的I/O事件,执行与I/O相关的回调
 * 检测:setImmediate回调函数在这里执行
 * 关闭的回调函数 例如socket.on('ckise',...)
 * 
 * 
 */



Promise.resolve().then(() => {
    console.log(4)
    process.nextTick(() => console.log(3));
    setTimeout(() => {
        console.log(1)
    });
    setImmediate(() => {
        console.log(2)
    })
});
(function () { console.log(5); })()


//1, 1,1122,p1 2 t2 p2

// const c = () => {
//     return new Promise((resolve, reject) => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(1)
//             resolve(1)
//             Promise.resolve().then(() => {
//                 console.log('p1')
//                 setTimeout(() => {
//                     console.log('p2')
//                 });
//             })
//         }, 5000);

//     })
// }
// const test = async () => {
//     await c();
//     console.log(1122)
//     setTimeout(() => {
//         console.log(2)
//         setTimeout(() => {
//             console.log('t2')
//         });
//     });

// }
// test()




// Promise.resolve().then(() => console.log('sync1'))
// setTimeout(() => {
//     console.log(1)
//     Promise.resolve().then(() => console.log('p1'))
//     setTimeout(() => {
//         console.log('1.1')
//         Promise.resolve().then(() => console.log('p1.1'))
//     });
// });
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => console.log('p2'))
//     setTimeout(() => {
//         console.log('2.1')
//         Promise.resolve().then(() => console.log('p2.1'))
//     });
// });
// setTimeout(() => {
//     console.log(3)
//     Promise.resolve().then(() => console.log('p3'))

// });

/**
 * js
 * 同步执行
 * 异步任务注册 进入web apis内 定时器这时候开始计时,计时完毕 进入callbackQueue内然后
 * 执行队列第一个 有微任务微任务插队到第一个队列(也就是执行下一个宏任务之前会执行完所有已注册的微任务)
 */