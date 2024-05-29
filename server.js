import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirName + '/index.html');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  // res.send(`<h1> ${JSON.stringify(req.body)} </h1>`);
});

app.get('/about', (req, res) => {
  res.send(
    '<h1>Backend Technologies</h1><p>Able to use Node.js to initialize a server with the help of Express.js to make it easier and more efficient</p>'
  );
});

app.get('/contact', (req, res) => {
  res.send(
    '<h1>Contact Me</h1><p>Reach out if you need any help with setting up a basic server with Node and Express. (123) 456-7890</p>'
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
