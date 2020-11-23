const express = require("express");
const app = require('../app');
const favorRouter = express.Router();
const User = require('./../models/User.model');
const Favor = require('./../models/NewFavor.model');

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

// //---routes
favorRouter.get("/favor/create", isLoggedIn, (req, res, next) => {
    const props = {} //CL>cl current session user name to greet
    res.render("FavorCreate", props);
});


favorRouter.post("/favor/create", (req, res, next) => {

    const {title, date, timeStart, timeDuration, description, tags, location} = req.body;
    const createrUser = req.session.currentUser._id
    
    Favor
    .create ( {createrUser, title, date, timeStart, timeDuration, description, tags, location})
    .then ((createdFavor) => {
        console.log("createdFavor", createdFavor)
        const favorId = createdFavor._id

        User
        .findByIdAndUpdate(createrUser, { $push: {favorsCreated: favorId}}, {new:true})
        // .then (user => res.redirect(`/`))
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
    .then( favorDetail => {
        const props = favorDetail
        console.log("favorDetail----->", props)
        res.render("FavorDetail", favorDetail)
    })
    .catch(error => console.log(error))
})

favorRouter.get("/favoredit/:id", isLoggedIn, (req, res, next) => {
    const favorId = req.params.id;
    Favor
    .findById(favorId)
    .then( favorDetail => {
        // const propgit checkouts = favorDetail
        
        console.log("req.params.id", req.params.id, "favorDetail----->", props)
        res.render("FavorEdit", favorDetail)
    })
    .catch(error => console.log(error))

})



//CL>CL you NEEEEEEEEEED to FIIIIIIIIIIIx thiiiiiiiiiii shiiiiiiiit  ;)


favorRouter.post("/favoredit/:id", (req, res, next) => {
// console.log("req.params.id", req.params.id;)
console.log("req.params.id", req.params.id)
    // const favorId = req.params.id;
    console.log("req.body", req.body)  //CLAUDIA ESTUVO ACA
    const {title, date, timeStart, timeDuration, description, tags} = req.body;
    // const {title} = req.body;
    // const createrUser = req.session.currentUser._id
    
    Favor
    .findByIdAndUpdate ( 
        req.params.id, 
         {title, date, timeStart, timeDuration, description, tags},
        // { $set: { title}}
        {new:true}
    )
    // .findByIdAndUpdate ( {title})
    .then ((editedFavor) => {
        console.log("editedFavor", editedFavor)
        console.log("editedFavorID", editedFavor._id)
        const favorId = editedFavor._id
        // res.redirect(`/favor/${favorId}`)
        res.redirect(`/`)
    })
    .catch ((err) => {
        console.log(err)
        // res.render("favor/edit/:id")
    })


})

module.exports = favorRouter