const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Driver = mongoose.model('Driver', driverSchema)

module.exports = Driver