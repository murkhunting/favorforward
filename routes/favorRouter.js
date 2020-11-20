const express = require("express");
const app = require("../app");
const favorRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/Favor.model");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

// //---routes
// favorRouter.get("/create", (req, res, next) => {
//     const props = {} //CL>cl current session user name to greet
//     res.render("FavorCreate", props);
// });

module.exports = favorRouter;
