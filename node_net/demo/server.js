const { globalConf } = require('./conf')
const net = require('net');
const fs = require('fs')
const server = net.createServer();

server.listen(globalConf.port, '127.0.0.1')

server.on('listening', () => {
    console.log(' server is running')
})

server.on('connection', socket => {
    socket.on('data', (data) => {
        let url = data.toString().split('\n')[0].split(' ')[1]
        try {
            let dataFile = fs.readFileSync(__dirname + globalConf.path + url)
            socket.write('HTTP 200OK\nServer:bdw1.1\n\n')//自定义响应头dbw
            socket.write(dataFile)
        } catch (err) {
            console.log(err)
            socket.write('HTTP 404NotFound\n\n<html><body>NotFound</body></html>')
        }
        socket.end()

    })
})