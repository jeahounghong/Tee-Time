const express = require("express");
const Course = require('../../models/Course');
const keys = require('../../config/keys');
const passport = require('passport');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "This is the courses route"}))

router.post('/', (req,res) => {

    console.log("COURSE REQUEST")
    console.log(req.body)
    const newCourse = new Course({
        name: req.body.name,
        location: {
          lat: req.body.lat,
          long: req.body.long
        }, 
        link: req.body.link
    })

    newCourse.save().then(course => res.json(course))
})

router.get('/:id', (req,res) => {
    Course.findById(req.params.id)
        .then(course => res.json(course))
})


module.exports = router;