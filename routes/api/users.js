const express = require("express");
const bcrypt = require('bcryptjs');
const User = require('../../models/User.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email
        //what else do we want here
    })
});

router.get('/', (req,res) => {
    User.find()
        .sort({lastName: -1})
        .then(users => {
            res.json(users.map(user => {return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                groups: user.groups,
                events: user.events,
                imageUrl: user.imageUrl,
                bio: user.bio,
                follows: user.follows
            }}))
        })
        .catch(err => res.status(404).json({noUsersFound: "Users were not found"}))
})

router.patch('/:id', (req,res) => {

    User.findById(req.body.id)
        .then(user => {
            user.groups = req.body.groups;
            user.events = req.body.events;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.imageUrl = req.body.imageUrl; // added for image handling
            user.bio = req.body.bio;
            user.follows = req.body.follows;

            return user.save().then(user => res.json(user))
        })
        .catch(err => res.status(404).json({noUsersFound: "Users were not found"}))
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to make sure nobody has already registered with a duplicate email
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          // Throw a 400 error if the email address already exists
          errors.email = "User already exists";
          return res.status(400).json(errors)
        } else {
          // Otherwise create a new user
          const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
          })
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => {
                    const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName };

                    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                        res.json({
                            succes: true,
                            token: "Bearer " + token
                        });
                    });
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
  });

  router.post('/login', (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateLoginInput(req.body);
    console.log("REQUEST BODY")
    console.log(req.body.email)
    if (!isValid) {
        console.log(errors)
        return res.status(400).json(errors);
    }

    console.log("logging in..")

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if (!user) {
                errors.email = "This user does not exist"
                return res.status(404).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName}; // payload should have all of the user info that we might want to access later on in the frontend

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(404).json(errors);
                    }
                });
        });
  });




module.exports = router;

