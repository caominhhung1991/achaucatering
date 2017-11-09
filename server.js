const express = require('express')
const app = express()

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(8081, function () {
  console.log('Example app listening on port 3000!')
})