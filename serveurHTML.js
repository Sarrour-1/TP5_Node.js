import { createServer } from 'http';
import { readFile } from 'fs';

const server = createServer((_req, res) => {
  readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Erreur serveur');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Serveur HTML lancé sur le port 3000');
});
