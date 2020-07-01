const {formatPrice} = require('../../lib/utils')

const Category = require('../models/Category')
const File = require('../models/File')


module.exports = {
    async index(req, res) {
        let results = await Product.all()
        const products = results.rows

        if (!products) return results.send("Products not found")

    }
}