const express = require("express");
const app = require("../app");
const userRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/NewFavor.model");
const parser = require("./../config/cloudinary");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

//---routes

userRouter.get("/dashboard", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;

  User.findById(currentUser)
    .then((user) => {
      const props = { userIsLoggedIn: true, user };
      console.log("user is----------", req);
      console.log("props is----------", props);
      res.render("UserDashboard", props);
    })
    .catch((error) => {
      console.log(error);
    });
});

userRouter.get("/dashboard/edit", isLoggedIn, (req, res, next) => {
  const currentUser = req.session.currentUser._id;
  console.log(currentUser);
  User.findById(currentUser)
    .then((user) => {
      const props = { userIsLoggedIn: true, user };
      console.log("userDetail----->", props);
      res.render("UserEdit", props);
    })
    .catch((error) => console.log(error));
});

userRouter.post(
  "/dashboard/edit",
  parser.single("profilepic"),
  (req, res, next) => {
    // `multer` parses the incoming image coming from the form data and upload's it using
    // the middleware `parse.single('profilepic') we set above.

    // The URL of the image uploaded to the cloudinary servers by the middleware becomes available via the `req.file.secure_url` property
    let imageUrl;
    if (req.file) imageUrl = req.file.secure_url; // check if the image was selected/uploaded

    const newUser = { email, password, image: imageUrl };

    // Here we usually have our authentication/signup logic...
    // ...checking email/password, hashing password, etc.

    User.create(newUser)
      .then((createdUser) => {
        createdUser.password = "***";
        req.session.currentUser = createdUser;

        res.redirect("/profile");
      })
      .catch((err) => console.log(err));
  }
);

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
module.exports = userRouter;
