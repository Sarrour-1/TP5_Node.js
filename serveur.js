const http = require('http');

const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Serveur lancé sur le port ${port}`);
});

server.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
