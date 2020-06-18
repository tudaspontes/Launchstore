const express = require('express')
const routes = express.Router()

// users routes

routes.get('/', function(req, res) {
    return res.render("layout.njk")
})

module.exports = routes