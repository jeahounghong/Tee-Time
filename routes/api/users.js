const express = require("express");
const bcrypt = require('bcryptjs');
const User = require('../../models/User.js');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


module.exports = router;

