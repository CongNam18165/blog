const express = require('express');
const morgan= require('morgan');
const app = express();
const path = require('path');

const port = 3000;

app.use(morgan('combined'))


app.get('/', (req, res) => {

  res.send('hello world!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})