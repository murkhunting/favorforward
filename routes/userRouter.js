const express = require("express");
const app = require("../app");
const userRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/NewFavor.model");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

//---routes

userRouter.get("/dashboard", isLoggedIn, (req, res, next) => {
    
    const currentUser = req.session.currentUser._id
   
    User
    .findById(currentUser)
    .then (user => {
        const props = { userIsLoggedIn:true, user}
        res.render("UserDashboard", props)
    })
    .catch(error=> {console.log(error)})
})

module.exports = userRouter;

