const express = require("express"); 
const path = require('path') 

const volleyball = require('volleyball') 


const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy; 
const authAPI = require("./api/routes/index");
const User = require ("./api/modelo/User");

const app = express(); 

 
const db = require ("./api/db"); 



app.use(volleyball); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  
 
app.use(cookieParser()); // popula req.cookie
app.use(session({ secret: "bootcamp" })); // popula req.session

app.use(passport.initialize());
app.use(passport.session()); 

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({
        where:{ email }})
        .then((user) => {
          if (!user) {
            return done(null, false); // user not found
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);
// How we save the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
}); 

app.use(express.static("public"));

app.use("/api", authAPI); 

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});


db.sync({force: false}).then(()=>{
  
  app.listen(3000, ()=>{
      console.log('escuchando en puerto 3000')
  })
}) 

