const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/login', async (req, res) => {
    let data = req.body.newUser;
    // console.log(data)
    try{
            let user = await User.findOne({email:data.email,number:Number(data.number)});
      
            let token = user.tokens[0].token;
            res.status(201).send({ user, token })
        }
        catch{
            let user = new User(data);
           
                try {
                    await user.save()
                    let token = await user.generateAuthToken();
                    res.status(201).send({ user, token })
                } catch (e) {
                    res.status(400).send(e)
                }
        } 
    
      
})

router.get('/user', auth, async (req, res) => {
    console.log(req.user);
    res.send(req.user)
})

module.exports = router