const express = require('express')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const models = require('./models')
const bodyParser = require('body-parser')
const schema = require('./schema/schema')
const { MONGO_DB_URL } = require('./server.configs')

const app = express()

const MONGO_URI = MONGO_DB_URL

if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error))

app.use(bodyParser.json())
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
)

// const webpackMiddleware = require('webpack-dev-middleware')
// const webpack = require('webpack')
// const webpackConfig = require('../webpack.config.js')
// app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app
