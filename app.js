require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const erv = require("express-react-views");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
// const isLoggedIn = require("./utils/isLoggedIn")

const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const favorRouter = require("./routes/favorRouter");
const apiRouter = require("./routes/apiRouter");
const Favor = require("./models/NewFavor.model");

const app = express();

// DB CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the FavorForward-DB."))
  .catch((err) => console.log(err));

// VIEW ENGINE SETUP
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// SESSIONS MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // cookie: { maxAge: 3600000 * 1 },	// 1 hour // Time after which the cookie saved on the browser expires
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 60 * 60 * 24 * 7,
      // `ttl` Time to live - after which the session document saved
      // in the DB expires - 7 days (14 days is the default if the option is not explicityl set)
    }),
  })
);

// ROUTES
app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/", favorRouter);

/* GET home page. */
app.get("/", (req, res, next) => {
  
  Favor
    .find()
    .then(favorList => {

      let props = {}
      const location = "map";
      if (req.session.currentUser) {
      
      const userIsLoggedIn = Boolean(req.session.currentUser)
      const name = req.session.currentUser.name
      const profilepic = req.session.currentUser.profilepic
      props = { userIsLoggedIn, name , profilepic, favorList, location} 
      // console.log("props", props)
      } else {
        props = { favorList, location}
      }
      res.render("Home", props);
    })


});

app.get("/info", (req, res, next) => {
  let props = {}
  if (req.session.currentUser) {
  const userIsLoggedIn = Boolean(req.session.currentUser)
  const name = req.session.currentUser.name
  const profilepic = req.session.currentUser.profilepic
  props = { userIsLoggedIn, name , profilepic} 
  // console.log("props", props)
  } else {
    props = {}
  }
  res.render("Info", props);
});


module.exports = app;
