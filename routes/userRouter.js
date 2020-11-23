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
        console.log("user is----------", req)
        console.log("props is----------", props)
        res.render("UserDashboard", props)
    })
    .catch(error=> {console.log(error)})
})

module.exports = userRouter;

// let props = {}
//   if (req.session.currentUser) {
//       // const props = { userIsLoggedIn } //CL>cl current session user name to greet
//       // console.log("uuuuuuuser--------", req.session.currentUser.name)
//     const userIsLoggedIn = Boolean(req.session.currentUser)
//     const name = req.session.currentUser.name
//     props = { userIsLoggedIn, name } //CL>cl current session user name to greet
//     console.log("props", props)
//   }
//   res.render("Home", props);