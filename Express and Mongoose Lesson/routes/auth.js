// Basic auth process
const router = require("express").Router(); 
const userModel = require('../models/User')

// handles all users request
// recive request form client
// get your model and call it up as  a class
router.post('/signup',async (req, res) => {
    const { username, password, email } = req.body
    const newUser = new userModel({
        username: username,
        password: password,
        email: email,
        isAdmin: false
    })

    try {
        const savedUser = await newUser.save()  
        res.status(200).json(savedUser);
    }
    catch(err) {
        res.status(500).json(err)
    }

    res.send(`${username} ${password} ${email}`)
})

module.exports = router;