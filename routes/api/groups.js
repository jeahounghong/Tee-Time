const express = require("express");
const Group = require('../../models/Group');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();

const validateGroupInput = require('../../validation/groups');
const User = require("../../models/User");

router.get('/test', (req, res) => res.json({msg: "This is the groups route"}))

router.post('/',passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log("Groups post")
    console.log(`User: ${req.user.id}`)
    const {errors, isValid} = validateGroupInput(req.body);

    if (!isValid){
        return res.status(400).json(errors)
    }
    
    const newGroup = new Group({
        name: req.body.name,
        description: req.body.description,
        ownerId: req.user.id
    })
    console.log(`New group: ${newGroup}`)
    newGroup.save().then( group => res.json(group))

})


module.exports = router;