const http = require('http')
const server = http.createServer();
const fs = require('fs')
const path= require('path')


//EXAMPLE #1
// server.on('request',(req, res)=>{
//     res.write("abc\n")
//     res.end('hello world')
// })
// console.log("starting server")
// server.listen(3000)

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

    html = html.replace('{Message}', 'Hello from Node.js!');

    res.end(html);

}).listen(3000, '127.0.0.1', () => { console.log('listening on 3000...') });