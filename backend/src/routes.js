const { Router } = require('express')

const routes = Router()

// query params: request.query
// route params: request.params
// body: request.body

routes.post('/create-user', (request, response) => {
  console.log(request.body)
  return response.json({ message: 'Hi, this is a test.'})
})


module.exports = routes;