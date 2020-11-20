const express = require("express");
const app = require('../app');
const favorRouter = express.Router();
const User = require('./../models/User.model');
const Favor = require('./../models/Favor.model');

//---helpers
const isLoggedIn = require('./../utils/isLoggedIn');


// //---routes
// favorRouter.get("/create", (req, res, next) => {
//     const props = {} //CL>cl current session user name to greet
//     res.render("FavorCreate", props);
// });


// favorRouter.post("/create", (req, res, next) => {

//     // const {title, date, timeStart, timeEnd, description, tag} = req.body;
//     const {title} = req.body;
//     // const currUser = req.session.currentUser._id;
  
//     // .create ( {title, date, timeStart, timeEnd, description, tag})
//     Favor
//     .create ( {title})
//     .then ((createdFavor) => {
//         console.log("createdFavor", createdFavor)
//         res.redirect('/')})
//     .catch ((err) => console.log(err))
// });


module.exports = favorRouter;
