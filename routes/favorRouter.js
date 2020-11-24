const express = require("express");
const app = require("../app");
const favorRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/NewFavor.model");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

// //---routes
favorRouter.get("/favor/create", isLoggedIn, (req, res, next) => {
  const props = {}; //CL>cl current session user name to greet
  res.render("FavorCreate", props);
});

favorRouter.post("/favor/create", (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const {
    title,
    date,
    timeStart,
    timeDuration,
    description,
    tags,
    location,
  } = req.body;
  const createrUser = req.session.currentUser._id;

  Favor.create({
    createrUser,
    title,
    date,
    timeStart,
    timeDuration,
    description,
    tags,
    location,
  })
    .then((createdFavor) => {
      console.log("createdFavor", createdFavor);
      const favorId = createdFavor._id;

      User.findByIdAndUpdate(
        createrUser,
        { $push: { favorsCreated: favorId } },
        { new: true }
      )
        // .then (user => res.redirect(`/`))
        .then((user) => res.redirect(`/favor/${favorId}`))
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
      res.render("favor/create");
    });
});

favorRouter.get("/favor/:id", (req, res, next) => {
  const favorId = req.params.id;
  Favor.findById(favorId)
    .then((favorDetail) => {
      const props = favorDetail;
      console.log("favorDetail----->", props);
      res.render("FavorDetail", favorDetail);
=======
=======
>>>>>>> develop

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
    .then( favorDetail => {
        const props = favorDetail
        res.render("FavorDetail", favorDetail)
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop
    })
    .catch((error) => console.log(error));
});

favorRouter.get("/favoredit/:id", isLoggedIn, (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const favorId = req.params.id;
  Favor.findById(favorId)
    .then((favorDetail) => {
      const props = favorDetail;

      console.log("req.params.id", req.params.id, "favorDetail----->", props);
      res.render("FavorEdit", favorDetail);
    })
    .catch((error) => console.log(error));
});

//CL>CL you NEEEEEEEEEED to FIIIIIIIIIIIx thiiiiiiiiiii shiiiiiiiit  ;)

favorRouter.post("/favoredit/:id", (req, res, next) => {
  // console.log("req.params.id", req.params.id;)
  console.log("req.params.id", req.params.id);
  // const favorId = req.params.id;
  console.log("req.body", req.body);
  const { title, date, timeStart, timeDuration, description, tags } = req.body;
  // const {title} = req.body;
  // const createrUser = req.session.currentUser._id

  Favor.findByIdAndUpdate(
    req.params.id,
    { title, date, timeStart, timeDuration, description, tags },
    // { $set: { title}}
    { new: true }
  )
    // .findByIdAndUpdate ( {title})
    .then((editedFavor) => {
      console.log("editedFavor", editedFavor);
      console.log("editedFavorID", editedFavor._id);
      const favorId = editedFavor._id;
      // res.redirect(`/favor/${favorId}`)
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err);
      // res.render("favor/edit/:id")
    });
});
=======
=======
>>>>>>> develop
    const favorId = req.params.id;
    Favor
    .findById(favorId)
    .then( favorDetail => {
        const props = favorDetail
        res.render("FavorEdit", favorDetail)
    })
    .catch(error => console.log(error))

})


favorRouter.post("/favoredit/:id", (req, res, next) => {

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


favorRouter.post("/favordelete/:id", (req, res, next) => {
    const createrUserId = req.session.currentUser._id
    const deletedFavorId = req.params.id

    User
    .findByIdAndUpdate( createrUserId, { $pull: {favorsCreated: deletedFavorId}})
    .then( user => console.log("user", user))
    .catch((err)=>console.log(err))

    Favor
    .findByIdAndDelete ( deletedFavorId )
    .then( deletedFavor => res.redirect("/user/dashboard"))
    .catch ((err) => console.log(err))
})


favorRouter.post("/favordo/:id", (req, res, next) => {
    const currUserId = req.session.currentUser._id
    const doFavorId = req.params.id
 
    User
    .findByIdAndUpdate( currUserId, { $push: {favorsProvided: doFavorId}})
    .then( user => console.log("user", user))
    .catch((err)=>console.log(err))
    
    Favor
    .findByIdAndUpdate( doFavorId, {providerUser: currUserId})
    .then( user => res.redirect("/user/dashboard"))
    .catch((err)=>console.log(err))

})
<<<<<<< HEAD
>>>>>>> develop
=======
>>>>>>> develop

module.exports = favorRouter;
