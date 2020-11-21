const express = require("express");
const app = require('../app');
const favorRouter = express.Router();
const User = require('./../models/User.model');
const Favor = require('./../models/NewFavor.model');

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

// //---routes
favorRouter.get("/create", isLoggedIn, (req, res, next) => {
    const props = {} //CL>cl current session user name to greet
    res.render("FavorCreate", props);
});


favorRouter.post("/create", (req, res, next) => {

    const {title, date, timeStart, timeDuration, description, tag, location} = req.body;
    const createrUserId = req.session.currentUser._id
    Favor
    .create ( {createrUserId, title, date, timeStart, timeDuration, description, tag, location})
    // .create ( {title})
    .then ((createdFavor) => {
        console.log("createdFavor", createdFavor)
        res.redirect('/')})
    .catch ((err) => console.log(err))
});


favorRouter.get("/:id", (req, res , next) => {
    const favorId = req.params.id;
    Favor
    .findById(favorId)
    .then( favorDetail => {
        console.log("favorDetail----->", favorDetail)
        res.render("FavorDetail", favorDetail)
    })
    .catch(error => console.log(error))
})

module.exports = favorRouter;
