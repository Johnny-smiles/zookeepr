// linking file service
const fs = require('fs');
const path = require('path');
//linking express.js
const express = require('express');
// linking animals.json
const { animals } = require('./data/animals')
// linking routing file
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// parse ("formatting") incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
