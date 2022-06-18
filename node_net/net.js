// net模块
/**
 * 5层网络协议
 * 1. 应用层 http(超文本传输协议) FTP协议  端口21 SMTP(邮件的发送) 端口:25 POP3 端口:110 DNS域名解析系统
 * 2. 传输层/运输层: TCP UDP;
 * 3. 网络层:IP,ICMP
 * 4. 数据链路层 PPP, SLIP;
 * 5. 物理层: ISO2110(规范)
 */

const net = require('net')

const server = net.createServer();
server.listen(12306, '127.0.0.1');

server.on('listening', () => {
    console.log('服务启动')
})

server.on('connection', socket => {
    // console.log(socket, '新的连接')
    socket.on('data', (data) => {
        // console.log(data.toString())
        socket.write('HTTP 200OK \n CntentType:text/html \n\n<html><body>hellow Browser</body></html> ')
        socket.end()
    })
})