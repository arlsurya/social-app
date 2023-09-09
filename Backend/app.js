const express = require('express')
const logger = require('morgan')
const dotenv = require('./env')
const cors = require('cors')
const app = express()
const http = require('http');

const DB = require('./Core/db')
DB()

app.use(logger('dev'))

const indexRoutes = require('./Routes/index')
const apiRoutes = require('./Routes/api')

app.use(cors())
app.use(express.json())
// socket.io configuration
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server( server,{
    cors: {
      origin: "*"
    }
  });



app.use('/', indexRoutes)
app.use('/api', apiRoutes)
io.on('connection', (socket) => {
    console.log('a user connected');
  });


module.exports = server;   