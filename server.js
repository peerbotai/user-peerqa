const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Claude Code dev server!\n');
});

server.listen(3010, () => {
  console.log('Server running on port 3010');
});