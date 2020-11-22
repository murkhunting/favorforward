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

    const {title, date, timeStart, timeDuration, description, tags, location} = req.body;
    const createrUser = req.session.currentUser._id
    
    Favor
        .create ( {createrUser, title, date, timeStart, timeDuration, description, tags, location})
        .then ((createdFavor) => {
            console.log("createdFavor", createdFavor)
            const favorId = createdFavor._id
            User
                .findByIdAndUpdate(createrUser, { $set: {favorsCreated: favorId}}, {new:true})
                .then (user => {
                    res.redirect(`/favor/:${favorId}`)
                })

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


