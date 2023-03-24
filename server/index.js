const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const oneDay = 1000 * 60 * 60 * 24;

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

//register
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

// Login
app.post("/login", function (req, res) {
  console.log(1 + req.body);
  let { username, password } = req.body;

  let selectSQl = "SELECT * FROM `users` WHERE `username` = '" + username + "'";

  db.query(selectSQl, (err, rows) => {
    if (err) throw err;

    if (rows.length > 0) {
      if (rows[0].password === password) {
        //session = req.session;
        sessions.username = username;
        console.log("1" + sessions.username);

        res.send(rows);
        //res.send("Success");
        console.log("success");
      } else {
        res.send("IncorrectPassword");
      }
    } else {
      res.send("Invalid Email");
    }
  });
});

//get user (guide) information
app.get("/guide/userdata", (req, res) => {
  //console.log(sessions.username);
  const sqlGet =
    "SELECT * FROM USERS WHERE USERROLE = 'Project Guide' and username = '" +
    sessions.username +
    "'";
  db.query(sqlGet, (error, result) => {
    res.send(result);
    console.log(result);
  });
});

//get user (student) information
app.get("/student/userdata", (req, res) => {
  //console.log(sessions.username);
  const sqlGet =
    "SELECT * FROM USERS WHERE USERROLE = 'Student' and username = '" +
    sessions.username +
    "'";
  db.query(sqlGet, (error, result) => {
    res.send(result);
    console.log(result);
  });
});

//update the guide details
app.post("/saveGuideDetails", (req, res) => {
  const {
    guide_name,
    guide_about,
    department,
    guide_phone,
    guide_email,
    guide_github,
  } = req.body;
  console.log(req.body);

  var fields = [
    guide_name,
    guide_about,
    department,
    guide_phone,
    guide_email,
    guide_github,
    sessions.username,
  ];
  var updateQuery =
    "UPDATE guide SET guide_name = ?, guide_about = ?, department=?, guide_phone = ?, guide_email = ?, guide_github = ? where guide_id =  ?";

  db.execute(updateQuery, fields, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//update the student details
app.post("/saveStudentDetails", (req, res) => {
  const {
    student_name,
    student_about,
    department,
    student_phone,
    student_email,
    student_github,
  } = req.body;
  console.log(req.body);

  var fields = [
    student_name,
    student_about,
    department,
    student_phone,
    student_email,
    student_github,
    sessions.username,
  ];
  var updateQuery =
    "UPDATE student SET student_name = ?, student_about = ?, department=?, student_phone = ?, student_email = ?, student_github = ? where student_id =  ?";

  db.execute(updateQuery, fields, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//get guide information
app.get("/guide/data", (req, res) => {
  console.log("3" + sessions.username);
  const sqlGet =
    "SELECT * FROM GUIDE WHERE Guide_id = '" + sessions.username + "'";
  db.execute(sqlGet, (error, result) => {
    res.send(result);
    console.log("3" + result);
  });
});

//get student information
app.get("/student/data", (req, res) => {
  console.log("Student Error" + sessions.username);
  const sqlGet =
    "SELECT * FROM STUDENT WHERE Student_id = '" + sessions.username + "'";
  db.execute(sqlGet, (error, result) => {
    res.send(result);
    console.log("3" + result);
  });
});

//add a team
app.post("/guide/addTeam", (req, res) => {
  const {
    team_number,
    project_name,
    project_description,
    member1,
    member2,
    member3,
  } = req.body;
  console.log(req.body);

  var fields = [
    sessions.username,
    team_number,
    project_name,
    project_description,
    member1,
    member2,
    member3,
  ];
  var insertQuery =
    "Insert into team(guide_id, team_id, project_name, project_description, member1, member2, member3) values(?,?,?,?,?,?,?)";

  db.execute(insertQuery, fields, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//get teams information
app.get("/getTeams", (req, res) => {
  //console.log(sessions.username);
  const sqlGet =
    "SELECT * FROM TEAM WHERE Guide_ID = '" + sessions.username + "'";
  db.query(sqlGet, (error, result) => {
    res.send(result);
    console.log(result);
  });
});

//add a task
app.post("/guide/addtask", (req, res) => {
  const { task_number, task_name, task_description, start_date, end_date } =
    req.body;
  console.log(req.body);
  console.log(sessions.username);
  var fields = [
    task_number,
    sessions.username,
    task_name,
    task_description,
    start_date,
    end_date,
  ];
  console.log(fields);
  var insertQuery =
    "Insert into tasks(task_number, guide_id, task_name, task_description, start_date, end_date) values(?,?,?,?,?,?)";

  db.execute(insertQuery, fields, (err, result) => {
    console.log(err);
    res.send(result);
  });
});

//get tasks information
app.get("/getTasks", (req, res) => {
  console.log(sessions.username);
  const sqlGet = "SELECT * FROM TASKS";
  db.query(sqlGet, (error, result) => {
    res.send(result);
    console.log(result);
  });
});

//admin-authentication
app.get("/guide-auth", (req, res) => {
  console.log(sessions.username);
  if (sessions.username === undefined) {
    res.send("fail");
  } else {
    res.send("success");
  }
});

//logout
app.get("/logout", (req, res) => {
  sessions.username = undefined;
  console.log("logged out");
  res.send("success");
});

//app listening to port 3001
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
