const express = require("express");
const app = require("../app");
const favorRouter = express.Router();
const User = require("./../models/User.model");
const Favor = require("./../models/Favor.model");

//---helpers
const isLoggedIn = require("./../utils/isLoggedIn");

//---routes

module.exports = favorRouter;
