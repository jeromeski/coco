const express = require('express');
const app = express();

app.get('/', (req, res) => {
  send.res({ hi: 'there '})
})

const PORT = 5000;

app.listen(PORT)

console.log(
`==============================
  Server is running at ${PORT}
==============================`
);
  