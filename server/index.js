const express = require('express')
const dotenv = require('dotenv')
const app = express()
const chats = require("./data/chat")


dotenv.config()
const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/chats', function (req, res) {
 res.json(chats)
})

app.get('/api/chats/:id', function (req, res) {
  const singlechat = chats.find((c => c._id === req.params.id))
  res.send(singlechat)
})


app.listen(5000, console.log(`server at runnig at port ${PORT}`))
