const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Claude Code HTTP Server on port 3011!');
});

server.listen(3011, '0.0.0.0', () => {
  console.log('Server running on port 3011');
});