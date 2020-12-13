const express = require("express");
const passport = require("passport");
const User = require("../modelo/User");
const router = express.Router(); 

/*
  ALL YOUR ROUTES HERE!
*/

router.post("/register", (req, res) => {
  User.create(req.body).then((user) => {
    res.status(201).send(user);
  });
}); 

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send({
    user: req.user,
    isAutenticated: req.isAuthenticated(),
  });
});

router.get("/secret", (req, res) => {
  if (req.user) {
    res.send("cake.jpg");
  } else {
    res.sendStatus(401);
  }
}); 

router.post("/logout", (req, res) => {
  req.logOut();
  console.log("desloguie")
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user);
});

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
}); 

module.exports = router; 
