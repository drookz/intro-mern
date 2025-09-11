require('dotenv').config()
const express = require('express')
const { appConfig } = require('./config')

const app = express()
const port = appConfig.port

app.listen(port, () => console.log(`listen on ${port}`))
