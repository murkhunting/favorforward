const express = require("express");
const app = require("../app");
const authRouter = express.Router();

const User = require("./../models/User.model");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
// const zxcvbn = require('zxcvbn'); ////CL>MM do we need to install this??

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

//---routes

authRouter.get("/signup", function (req, res, next) {
  let props = {}
  const location = "login";
  props = {location}
  res.render("SignUp", props);
});


authRouter.post("/signup", (req, res, next) => {
  const { name, email, password, repeatPassword } = req.body;
  if (name === "" || email === "" || password === "" || repeatPassword === "") {
    const props = { errorMessage: "Enter your info" };

    res.render("SignUp", props);
    return;
  } else if (password !== repeatPassword) {
    const props = { errorMessage: "Passwords not matching" };
    res.render("SignUp", props);
    return;
  } 
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "This email already exist" };
        res.render("SignUp", props);
        return;
      } 
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      User.create({ name, email, password: hashedPassword })
        .then((createdUser) => {
          req.session.currentUser = createdUser;
          
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => next(err));
});


authRouter.get("/login", (req, res, next) => {
  let props = {}
  const location = "login";
  props = {location}
  res.render("Login", props);
});

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

authRouter.get('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy((error)=> {
    if (error){
      console.log(error)
    }else{
      res.redirect("/")
    }
  })
});
  




module.exports = authRouter;
