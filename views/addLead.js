const html = require('html-template-tag');

module.exports = () => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Chrome Extension</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <div>
        <input id="input-el" type="text" />
        <button id="input-btn">SAVE INPUT</button>
      </div>
    </body>
  </html> `;
