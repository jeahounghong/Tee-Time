const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const groups = require("./routes/api/groups");
const courses = require("./routes/api/courses")
const events = require("./routes/api/events");
const passport = require('passport');
const path = require('path');


const app = express();
app.use(passport.initialize());
require('./config/passport')(passport);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
};




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


const db = require(`./config/keys`).mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/users", users);
app.use("/api/groups", groups);
app.use("/api/courses", courses);
app.use("/api/events", events);
