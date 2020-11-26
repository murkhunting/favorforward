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
      const props = { userIsLoggedIn: true, user };
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
      const props = { userIsLoggedIn: true, user };
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
      const props = { userIsLoggedIn: true, user };
      res.render("UserEdit", props);
    })
    .catch((error) => console.log(error));
});

userRouter.post("/edit", isLoggedIn, parser.single("profilepic"), (req, res, next) => {
    const { name, email, age } = req.body;
    let profilepic;
    if (req.file) profilepic = req.file.secure_url;

    User.findByIdAndUpdate(
      req.session.currentUser._id,
      { profilepic, name, email, age },
      { new: true }
    )
      .then((editedUser) => {
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


module.exports = userRouter;
