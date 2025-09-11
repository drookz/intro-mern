const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String

}, { 
    timestamps: true 
})

module.exports = mongoose.model('Product', productSchema)

