require('dotenv').config()
const express = require('express')
const app = express()

const Image = require('./models/image')

app.use(express.static('dist'))

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

const cors = require('cors')

app.use(cors())

app.use(express.json())

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.get('/api/images', (request, response) => {
  Image.find({}).then(images => {
    response.json(images)
    console.log(`${images}`);
  })
})

app.post('/api/images', (request, response) => {
  const body = request.body

  if (body.uri === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const image = new Image({
    uri: body.uri,
  })
  console.log(image);

  image.save().then(savedImage => {
    response.json(savedImage)
  })
  .catch(error => next(error))
})

app.use(unknownEndpoint)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)