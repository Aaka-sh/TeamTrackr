const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
var session;
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })); //check for true
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//connecting to the database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "akash",
  database: "teamtrackr",
});

app.post("/register", (req, res) => {
  const { userrole, username, password } = req.body;

  let insertSQL =
    "INSERT INTO `users` VALUES ('" +
    userrole +
    "', '" +
    username +
    "','" +
    password +
    "')";

  db.execute(insertSQL, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//Temp
//Admin Login
app.post("/login", function (req, res) {
  console.log(req.body);
  let { username, password } = req.body;

  let selectSQl = "SELECT * FROM `users` WHERE `username` = '" + username + "'";

  db.query(selectSQl, (err, rows) => {
    if (err) throw err;

    if (rows.length > 0) {
      if (rows[0].password === password) {
        session = req.session;
        session.username = username;
        console.log(session.username);

        res.send("Success");
        console.log("success");
      } else {
        res.send("IncorrectPassword");
      }
    } else {
      res.send("Invalid Email");
    }
  });
});

//temp start
app.get("/guide/data", (req, res) => {
  console.log(session.username);
  const sqlGet =
    "SELECT * FROM USERS WHERE USERROLE = 'Project Guide' and username = '" +
    session.username +
    "'";
  db.query(sqlGet, (error, result) => {
    res.send(result);
    console.log(result);
  });
});
//temp end

// app.get("/userprofile", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.execute(
//     "SELECT * FROM users WHERE username = ? AND password = ?",
//     [username, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         console.log(result);
//         res.send(result);
//       } else res.send({ message: "Wrong username/password combination!" });
//     }
//   );
// });

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
