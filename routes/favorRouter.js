const express = require("express");
const app = require("../app");
const favorRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/NewFavor.model");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

// //---routes
favorRouter.get("/favor/create", isLoggedIn, (req, res, next) => {
    let props = {}
    const location = "add";
    if (req.session.currentUser) {
    const userIsLoggedIn = Boolean(req.session.currentUser)
    const name = req.session.currentUser.name
    const profilepic = req.session.currentUser.profilepic
    props = { userIsLoggedIn, name , profilepic, location} 
    // console.log("props", props)
    } else {
      props = {location}
    } //CL>cl current session user name to greet
  res.render("FavorCreate", props);
});

favorRouter.post("/favor/create", (req, res, next) => {

    const {title, date, timeStart, timeDuration, description, tags, location} = req.body;
    const createrUser = req.session.currentUser._id
    
    Favor
    .create ( {createrUser, title, date, timeStart, timeDuration, description, tags, location})
    .then ((createdFavor) => {
        const favorId = createdFavor._id
        User
        .findByIdAndUpdate(createrUser, { $push: {favorsCreated: favorId}}, {new:true})
        .then (user => res.redirect(`/favor/${favorId}`))
        .catch ((err) => console.log(err))
    })
    .catch ((err) => {
        console.log(err)
        res.render("favor/create")
    })
});


favorRouter.get("/favor/:id", (req, res , next) => {
    const favorId = req.params.id;
    
    Favor
    .findById(favorId)
    .populate("createrUser")
    .then( favorDetail => {
        let props = {}
        if (req.session.currentUser) {
        const currentUserId = req.session.currentUser._id
        const userIsLoggedIn = Boolean(req.session.currentUser)
        const name = req.session.currentUser.name
        const profilepic = req.session.currentUser.profilepic
        props = {userIsLoggedIn, name , profilepic, favorDetail, currentUserId}
        }else{
        props = {favorDetail, currentUserId}
        }
        res.render("FavorDetail", props)
    })
    .catch((error) => console.log(error));
});

favorRouter.get("/favoredit/:id", isLoggedIn, (req, res, next) => {
    const favorId = req.params.id;
    Favor
    .findById(favorId)
    .then( favorDetail => {
        let props = {}
        if (req.session.currentUser) {
        const userIsLoggedIn = Boolean(req.session.currentUser)
        const name = req.session.currentUser.name
        const profilepic = req.session.currentUser.profilepic
        props = {userIsLoggedIn, name , profilepic, favorDetail}
        }else{
        props = {favorDetail}
        }
        res.render("FavorEdit", props)
    })
    .catch(error => console.log(error))

})


favorRouter.post("/favoredit/:id", isLoggedIn, (req, res, next) => {

console.log("req.params.id", req.params.id)
 
    console.log("req.body", req.body)
    const {title, date, timeStart, timeDuration, description, tags, location} = req.body;

    Favor
    .findByIdAndUpdate ( 
        req.params.id, 
        {title, date, timeStart, timeDuration, description, tags, location},
        {new:true}
    )
    .then ((editedFavor) => {
        const favorId = editedFavor._id
        res.redirect(`/favor/${favorId}`)
    })
    .catch ((err) => {
        console.log(err)
       
    })
})


favorRouter.post("/favordelete/:id", isLoggedIn, (req, res, next) => {
    const createrUserId = req.session.currentUser._id
    const deletedFavorId = req.params.id

    User
    .findByIdAndUpdate( createrUserId, { $pull: {favorsCreated: deletedFavorId}})
    .then( user => console.log("user", user))
    .catch((err)=>console.log(err))

    Favor
    .findByIdAndDelete ( deletedFavorId )
    .then( deletedFavor => res.redirect("/user"))
    .catch ((err) => console.log(err))
})


favorRouter.post("/favordo/:id", isLoggedIn, (req, res, next) => {
    const currUserId = req.session.currentUser._id
    const doFavorId = req.params.id
 

    
    User
    .findByIdAndUpdate( currUserId, { $push: {favorsProvided: doFavorId, }})
    .then( user => console.log("user", user))
    .catch((err)=>console.log(err))
    
    Favor
    .findByIdAndUpdate( doFavorId, {providerUser: currUserId, status: "Favor Accepted"})
    .then( user => res.redirect("/user/"))
    .catch((err)=>console.log(err))

})

favorRouter.post("/favorcancel/:id", (req, res, next) => {
    const currUserId = req.session.currentUser._id
    const doFavorId = req.params.id
 
    User
    .findByIdAndUpdate( currUserId, { $pull: {favorsProvided: doFavorId}})
    .then( user => console.log("user", user))
    .catch((err)=>console.log(err))
    
    Favor
    // .findOneAndRemove ( doFavorId, {providerUser: currUserId})
    // .findByIdAndUpdate( doFavorId, { $pull: {providerUser: currUserId, status: "Favor Created"}})
    .findByIdAndUpdate( doFavorId, { $set: {providerUser: [], status: "Favor Created"}})
    .then( user => res.redirect("/user"))
    .catch((err)=>console.log(err))

})



module.exports = favorRouter;
