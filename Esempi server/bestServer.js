// Server semplice che risponde con "Hello World" a ogni richiesta HTTP
// Fatto utilizzando il framework Express di Node.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.post('/submit', (req, res) => {
  res.send('Ciao Mondo!');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});