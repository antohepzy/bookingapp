const mongoose = require('mongoose')

mongoose.connect("mongodb://mongo:27017/booking-app", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

