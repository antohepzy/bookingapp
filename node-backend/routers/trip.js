const express = require('express')
const router = new express.Router()
const Trip = require('../models/trip')

router.post('/getTrip', async(req,res)=>{
  
    try{
        let trip = await Trip.findOne({user:req.body.userId}).populate('user')
           
            if (!trip.id) {     
               res.status(404).send({error:"not found"})
            }

            res.status(201).send(trip);
            
    } 
    catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;