const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); // остановка сервера
});

server.listen(3000)