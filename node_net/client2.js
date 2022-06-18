var net = require('net')

const socket = net.connect(12306, '127.0.0.1')
socket.on('connect', () => {
    console.log('已经连接到服务器')
})
socket.write('hellow  server')


socket.on('data', data => console.log(data.toString()))

