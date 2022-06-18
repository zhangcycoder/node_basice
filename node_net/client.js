var net = require('net')

const socket = net.connect(12306, '127.0.0.1')
socket.on('connect', () => {
    console.log('已经连接到服务器')
})
// socket.write('hellow  server')
// socket.write('hellow  server2')
// socket.write('hellow  server3')


// socket.on('data', data => {
//     console.log(data.toString())
//     socket.end()
// })
socket.setTimeout(2000)
socket.on('timeout', (data) => console.log('超时了'))

// socket.on('close', () => console.log('close'))


