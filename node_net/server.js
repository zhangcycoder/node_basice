var net = require('net')

const server = net.createServer();

server.listen(12306, '127.0.0.1')

server.on('listening', () => {
    console.log('server connect success')

})

server.on('connection', (socket) => {
    console.log('新链接')
    socket.on('data', data => console.log(data.toString()))
    socket.write('hello client')
    socket.on('close', () => {
        console.log('客户端关闭')
        server.close()
    })
})

server.on('close', () => {
    console.log('服务器关闭完成')
})