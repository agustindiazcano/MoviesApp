const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const path = require('path');
const Favorites = require("./favorites");
//----------------------------------------- END OF IMPORTS---------------------------------------------------
mongoose.connect(
  "mongodb://localhost/passport-test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);
app.use(express.static(__dirname + "/public"));
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Login user
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

// Register user

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
      console.log("usuario creado")
    }
  });
});

// app.post("/register", (req, res) => {
//   User.findOne({ username: req.body.username }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send("User Already Exists");
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new User({
//         username: req.body.username,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.send("User Created");
//     }
//   });
// });

// Logut
app.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
  console.log("bye bye ")
})

// Persist session
app.get('/me', (req,res) => {
  if(!req.user) {
    return res.sendStatus(401)
  }
  console.log("seguis logueado juju")
  res.send(req.user)
})

// Logged user
app.get("/user", (req, res) => {

  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

// Find user

// app.get("/usuario", (req, res) => {

//   User.findById(req.params.id).populate("ataques")
//       .then((pokemon) => res.send(pokemon))
//       .catch((error) => res.status(500).send(error));
  

// });

// All users
app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    
    var userMap = [];

    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    console.log(users)
    res.send(users);  
  })
});

// Add fav

app.post("/favorites", (req, res) => {
  Favorites.create(req.body)
    .then((user) => res.send(user))
    .catch((error) => res.status(500).send(error));
  
});

// Remove fav

app.delete('/favorites', function(req, res) {
  User.find({}, function(err, users) {
    
    var userMap = [];

    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    console.log(users)
    res.send(users);  
  })
});


// Get fav

app.get('/favorites', function(req, res) {
  Favorites.find({}, function(err, users) {
    
    var userMap = [];

    users.forEach(function(user) {
      userMap[user._id] = user;
    });
    console.log(users)
    res.send(users);  
  })
});


// router.put("/favorites", (req, res) => {
//   const { userId, flightId } = req.query;
//   User.findOneAndUpdate(
//     { _id: userId },
//     { $push: { favorites: flightId } },
//     { new: true }
//   )
//     .populate({
//       path: "favorites",
//       populate: { path: "origin destination" },
//     })
//     .then((user) => res.send(user))
//     .catch((error) => res.status(500).send(error));
// });

app.post("/favorites", (req, res) => {

  User.findById(req.params.id).populate("Favorites")
    .then((pokemon) => res.send(pokemon))
    .catch((error) => res.status(500).send(error));

});

app.put("/favorites", (req, res) => {

    User.findOneAndUpdate(
      { username: req.body.movie.userFrom }
    ).then((pokemon) => res.send(pokemon))
    .catch((error) => res.status(500).send(error));

    User({
      username: req.body.movie.userFrom,
      favorites: req.body.movie.movieTitle,
    })

      res.send("pusheado a favoritos");
    

  });

  // PokemonModel.findOneAndUpdate({ _id: req.params.id }, req.body)
  // .then((pokemon) => res.send(pokemon))
  // .catch((error) => res.status(500).send(error));

// app.post("/favorites", (req, res) => {

// updateById(req, res) {
//   PokemonModel.findOneAndUpdate({ _id: req.params.id }, req.body)
//     .then((pokemon) => res.send(pokemon))
//     .catch((error) => res.status(500).send(error));
// }



// Remove fav

// router.delete("/favorites", (req, res) => {
//   Favorites.findOneAndUpdate(req.body)
//     .then((user) => {
//       res.send(user);
//     })
//     .catch((error) => res.status(500).send(error));
// });

//----------------------------------------- END OF ROUTES---------------------------------------------------

//Static file

app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Start Server
app.listen(5000, () => {
  console.log("Server Has Started 5000");
});



// require("./api/config/index");
// const express = require("express");
// const morgan = require("morgan");
// const { connection } = require("./api/config/index");
// const path = require("path");
// const bodyParser = require("body-parser");
// const rutas = require("./api/routes");
// /* const cors = require("cors"); */
// const app = express();

// // Cors para poder dar acceso a otros puertos
// /* app.use(cors()); */

// // Ruta estatica para servir archivos
// app.use(express.static(__dirname + "/public"));

// // Body Parser para que se puedan enviar json en el body del request
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Logger para mostrar todos los request que llegan al servidor
// app.use(morgan("dev"));

// // Middleware de rutas
// app.get("/", (req, res, next) => {
//     console.log('hola')
//     res.send('hola')
// })

// app.use("/api", rutas);

// // Html que devolvera con el front de la aplicacion
// app.get("/", (req, res) => {
//   res.sendFile("index.html");
// });


// connection.once('open', function() {

//     app.listen(5000, () => console.log("listenning on port 5000"))

//     })
    


