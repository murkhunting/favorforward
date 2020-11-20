const express = require("express");
const app = require('../app');
const authRouter = express.Router();

const User = require('./../models/User.model');
const bcrypt = require('bcrypt');
// const zxcvbn = require('zxcvbn'); ////CL>MM do we need to install this??

//---helpers
const isLoggedIn = require('./../utils/isLoggedIn');

//---routes
////CL>MM remember to pass isLoggedIn from utils

module.exports = authRouter;
