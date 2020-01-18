const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// query params: request.query
// route params: request.params
// body: request.body

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)

routes.get('/search', SearchController.index)

module.exports = routes;
