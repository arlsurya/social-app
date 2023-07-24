const express = require('express')
const app = express()

const logger = require('morgan')

app.use(cors())
app.use(express.json())


module.exports = app;   