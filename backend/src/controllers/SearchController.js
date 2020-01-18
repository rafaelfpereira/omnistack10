const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

const MAX_DISTANCE = 10000

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query

    const techsArray = parseStringAsArray(techs)

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: MAX_DISTANCE,
        },
      },
    })

    return response.json(devs)
  }
}