import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(
    '<h1>First Server</h1><p>Welcomes to my first Node.js and Express.js Server.</p>'
  );
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
