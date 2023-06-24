const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  const urlp = url.parse(req.url, true).pathname;

  if (urlp === '/') {
    res.write('Welcome to node');
    res.end();
  } else if (urlp === '/signin') {
    fs.readFile('./index.html', (err, page) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
      }
    });
  }else if (urlp === '/login') {
    fs.readFile('./sample.html', (err, page) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(page);
        res.end();
      }
    });
  }
}).listen(3001);
