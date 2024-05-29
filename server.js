import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(morgan('dev'), bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirName + '/index.html');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.post('/generate', (req, res) => {
  res.send(
    `<h1>Your Band Name is:</h1><h2>${req.body.street}${req.body.pet}👍</h2>`
  );
});

app.post('/login', (req, res) => {
  if (req.body.password === 'ILoveProgramming') {
    res.sendFile(__dirName + '/secrets.html');
  } else {
    res.redirect('/');
  }
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
