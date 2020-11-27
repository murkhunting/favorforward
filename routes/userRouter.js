const express = require("express");
const app = require("../app");
const userRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/NewFavor.model");
const parser = require("./../config/cloudinary");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");


//---routes
userRouter.get("/", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .populate("favorsCreated")
    .populate("favorsProvided")
    .then((user) => {
      let props = {}
      const location = "created";
      if (req.session.currentUser) {
      const userIsLoggedIn = Boolean(req.session.currentUser)
      const name = req.session.currentUser.name
      const profilepic = req.session.currentUser.profilepic
      props = { userIsLoggedIn, name , profilepic, user, location} 
      // console.log("props", props)
      } else {
        props = { user, location}
      }
      res.render("UserDashboard", props);
    })
    .catch((error) => {
      console.log(error);
    });
});

userRouter.get("/accepted", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .populate("favorsCreated")
    .populate("favorsProvided")
    .then((user) => {
      let props = {}
      const location = "created";
      if (req.session.currentUser) {
      const userIsLoggedIn = Boolean(req.session.currentUser)
      const name = req.session.currentUser.name
      const profilepic = req.session.currentUser.profilepic
      props = { userIsLoggedIn, name , profilepic, user, location} 
      // console.log("props", props)
      } else {
        props = { user, location}
      }
      res.render("UserAccepted", props);
    })
    .catch((error) => {
      console.log(error);
    });
});

userRouter.get("/edit", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .then((user) => {
      let props = {}
      const location = "created";
      if (req.session.currentUser) {
      const userIsLoggedIn = Boolean(req.session.currentUser)
      const name = req.session.currentUser.name
      const profilepic = req.session.currentUser.profilepic
      props = { userIsLoggedIn, name , profilepic, user, location} 
      // console.log("props", props)
      } else {
        props = { user, location}
      }
      res.render("UserEdit", props);
    })
    .catch((error) => console.log(error));
});

userRouter.post("/edit", isLoggedIn, parser.single("profilepic"), (req, res, next) => {
  const { name, email, age  } = req.body;
  let profilepic = req.body.profilepic
  // console.log("profillepic", req.body)
  // console.log("req.file", req.file)
  if (req.file) profilepic = req.file.secure_url;
  User.findByIdAndUpdate(
    req.session.currentUser._id,
    { profilepic, name, email, age },
    { new: true }
  )
    .then((editedUser) => {
      // console.log("---------", editedUser)
      req.session.currentUser = editedUser;
      console.log("this is req.session-------------", req.session.currentUser.profilepic)
      // req.session.reload((err) => {
      //   //console.log(req.session)
      //   if (err) {
      //     next(err);
      //     return;
      //   }
      // });
        res.redirect("/user");
    })
    .catch((err) => console.log(err));
}
);

userRouter.post("/delete", isLoggedIn, (req, res, next) => {
  const {_id} = req.session.currentUser
  console.log("id--------",_id);
  User.findByIdAndDelete(_id)
    .then(() => {
        req.session.destroy((error)=> {
        if (error){
            console.log(error)
        }else{
            res.redirect("/")
        }
        })
    })
    .catch((err) => console.log(err));
});

userRouter.get("/inbox", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  User.findById(currentUser)
    .then((user) => {
      let props = {}
      const location = "chat";
      if (req.session.currentUser) {
      const userIsLoggedIn = Boolean(req.session.currentUser)
      const name = req.session.currentUser.name
      const profilepic = req.session.currentUser.profilepic
      props = { userIsLoggedIn, name , profilepic, user, location} 
      // console.log("props", props)
      } else {
        props = { user, location}
      }
      res.render("Inbox", props);
    })
    .catch((error) => console.log(error));
});


module.exports = userRouter;
