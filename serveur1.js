import { createServer } from 'http';
import { readFile } from 'fs';

const server = createServer((_req, res) => {
  readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Erreur</h1><p>Impossible de lire le fichier.</p>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <title>Mon serveur</title>
        </head>
        <body>
          <h1>Titre de la page</h1>
          <p>${data}</p>
          <footer>Signature : Votre Nom</footer>
        </body>
        </html>
      `);
    }
  });
});

server.listen(8080, () => {
  console.log('Serveur démarré sur http://localhost:8080');
});
