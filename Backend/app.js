const express = require('express')
const logger = require('morgan')
const dotenv = require('./env')
const app = express()

app.use(cors())
app.use(express.json())


module.exports = app;   