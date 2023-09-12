const express = require('express')
const models = require('./start/models')
const run = require('./start/run')
const app = express()

run(app)
models(app, express)

