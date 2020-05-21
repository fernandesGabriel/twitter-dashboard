'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Frontend');
});

app.listen(8080)