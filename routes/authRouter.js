const express = require("express");
const app = require("../app");
const authRouter = express.Router();

const User = require("./../models/User.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const zxcvbn = require('zxcvbn'); ////CL>MM do we need to install this??

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

//---routes
////CL>MM remember to pass isLoggedIn from utils

//GET /auth/signup
authRouter.get("/signup", function (req, res, next) {
  res.render("SignUp");
});

//POST /auth/signup
authRouter.post("/signup", (req, res, next) => {
  //1. Get values from the form req.body.username
  const { name, email, password, repeatPassword } = req.body;
  console.log(req.body);
  //2. check if the form is empty and send an error message
  if (name === "" || email === "" || password === "" || repeatPassword === "") {
    const props = { errorMessage: "Enter your info" };

    res.render("SignUp", props);
    return;
  } else if (password !== repeatPassword) {
    const props = { errorMessage: "Passwords not matching" };
    res.render("SignUp", props);
    return;
  } else {
  }
  //3. Check if username is taken
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "This email already exist" };
        res.render("SignUp", props);
        return;
      } else {
      }
      //5. encriptamos el password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      //4. Create new user in DB
      User.create({ name, email, password: hashedPassword })
        .then((createdUser) => {
          req.session.currentUser = createdUser;
          //5. redirect to the home page
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => next(err));
});

//GET /auth/login
authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});
//POST /auth/login
authRouter.post("/login", (req, res, next) => {
  const { email, password} = req.body;
  if (email === "" || password === "") {
    const props = { errorMessage: "Indicate email and password" };
    res.render("Login", props);
    return;
  }

  User.findOne({ email }).then((user) => {
    if (!user) {
      const props = { errorMessage: "This email doesn't exist" };
      res.render("Login", props);
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (passwordCorrect) {
      req.session.currentUser = user;
      res.redirect("/");
    } else {
      res.render("Login", { errorMessage: "Incorrect password" });
    }
  });
});

authRouter.get('/logout', (req, res, next) => {
  req.session.destroy( ele => res.redirect("/"));
});
  




module.exports = authRouter;
