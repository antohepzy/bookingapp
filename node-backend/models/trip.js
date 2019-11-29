const mongoose = require('mongoose')

const tripSchema = new mongoose.Schema({
    date: {
        type:String
    },
    time: {
        type:String
    },
    address: {
        type:String
    },
    driver: {
        type:String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Trip = mongoose.model('Trip', tripSchema)

module.exports = Trip;