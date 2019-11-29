const mongoose = require('mongoose')
const validator = require('validator')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const Trip = require('./trip')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        // trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
   
    number: {
        type: Number,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]},
     {
    timestamps: true
})

userSchema.virtual('trip', {
    ref: 'Trip',
    localField: '_id',
    foreignField: 'user'
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    delete userObject.tokens
    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, "bookit")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

const User = mongoose.model("User",userSchema);
module.exports = User;