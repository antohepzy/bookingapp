const express = require('express')
const Driver = require('../models/driver')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/driver', async (req, res) => {
    const driver = new Driver({
        ...req.body
    })

    try {
        await driver.save()
        res.status(201).send(driver)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/driver', auth, async (req, res) => {
    try {
        const driver= await Driver.find({})

        if (!driver) {
            
            return res.status(404).send()
        }
        res.send(driver)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router