const express = require('express')
const app = express();
const callApi = require('./callapi');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const func = callApi.callApi;
// console.log(func);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
  setInterval(() => func(), 750000);
});

