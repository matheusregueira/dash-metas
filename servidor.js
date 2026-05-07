const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream('index.html').pipe(res);
}).listen(8081, () => {
  console.log('Dashboard rodando em: http://localhost:8081');
});
