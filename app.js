const express = require('express');
const morgan = require('morgan');
const addLead = require('./views/addLead');

const app = express();

//middleware for logging
app.use(morgan('dev'));

//middleware for handling public folder - i.e. project assets, images, etc.
app.use(express.static(__dirname + '/public'));

//route to retrieve form
app.get('/', async (req, res, err) => {
  try {
    res.send(addLead());
  } catch (err) {
    next(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}`);
});
