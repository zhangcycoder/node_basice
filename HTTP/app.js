const fs = require('fs');
const http = require('http');

const requestListener = (req, rep) => {
    console.log(req.url, req.method, req.header)
    const url = req.url;
    if (url === '/') {
        rep.setHeader('Content-Type', 'text/html')
        rep.write('<html>');
        rep.write('<head><meta charset="UTF-8"><title>我的页面</title></head>');
        rep.write('<body><form action="message" method="POST">  <input name="message"/> <button type="submit"> 点击我 </button></form>  </body>');
        rep.write('</html>');
        return rep.end()
    }
    if (url === '/message' && req.method === 'POST') {
        const body = [];
        let message = ''
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsBody = Buffer.concat(body).toString().split('=')[1]
            console.log(parsBody, 'parsBody', body)
            message = parsBody
            fs.writeFileSync('msg.txt', message)

        })
        rep.statusCode = 302
        rep.setHeader('Location', '/')
        return rep.end()
    }
    rep.setHeader('Content-Type', 'text/html')
    rep.write('<html>');
    rep.write('<head><meta charset="UTF-8"><title>我的页面</title></head>');
    rep.write('<body><h1>我的页面</h1></body>');
    rep.write('</html>');
    rep.end()

}
const server = http.createServer(requestListener)

server.listen(3000)
