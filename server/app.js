if (process.env.NODE_ENV === 'development') {
  require("dotenv").config()
}

const express = require('express')
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = process.env.PORT || 3000
const routes = require('./routes/index')
const errorHandling = require('./middlewares/errorHandling')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use('/', routes)
app.get('/', (req, res) => { res.status(200).json("welcome!") })
app.use(errorHandling)

server.listen(port, () => console.log(`Listening on port ${port}!`))