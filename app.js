const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res, err) => {
  try {
    const html = `<!DOCTYPE html>
      <html>
        <head>
          <title>Chrome Extension</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <div>
            <h3>TEST HEADING</h3>
          </div>
        </body>
      </html>`;

    res.send(html);
  } catch (err) {
    next(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`This app is running on port: ${PORT}`);
});
