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
    console.log(socket, '新的连接')
    socket.on('data', (data) => {
        console.log(data.toString())
       > GET / HTTP/1.1
        Host: 127.0.0.1:12306
        Connection: keep-alive
        Cache-Control: max-age=0
        sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"
        sec-ch-ua-mobile: ?0
        sec-ch-ua-platform: "macOS"
        Upgrade-Insecure-Requests: 1
        User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
        Sec-Fetch-Site: none
        Sec-Fetch-Mode: navigate
        Sec-Fetch-User: ?1
        Sec-Fetch-Dest: document
        Accept-Encoding: gzip, deflate, br
        Accept-Language: en,zh-CN;q=0.9,zh;q=0.8
        Cookie: name=xiaoming; hobby=足球
    })
})


