const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


app.get('/api/test', (req, res) => {
  const name = req.query.name || 'World';
  console.log(req.bo);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify( 
    { products: [
      {flavour: "vanilla", price: 2.00},
      {flavour: "chocolate", price: 2.20},
      {flavour: "strawberry", price: 2.30},
      {flavour: "mint", price: 2.40} ]
    }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
