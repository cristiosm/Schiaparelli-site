const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Obțineți calea către fișierul index.html
    const filePath = path.join(__dirname, 'index.html');

    // Verificați dacă fișierul există
    fs.exists(filePath, (exists) => {
        if (exists) {
            // Citim conținutul fișierului index.html
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    console.error('Eroare la citirea fișierului:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Eroare internă de server');
                } else {
                    // Specificăm tipul de conținut HTML
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    // Returnăm conținutul fișierului index.html
                    res.end(data);
                }
            });
        } else {
            // Dacă fișierul nu există, returnăm un cod de stare 404
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Fișierul nu a fost găsit');
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Serverul rulează la adresa http://localhost:${port}/`);
});
