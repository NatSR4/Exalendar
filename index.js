const dotenv = require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session")

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,
																process.env.DB_PSWD,{ host: process.env.DB_HOST,
																dialect: 'mysql' })
const db_tools = require('./Database/database_tools')
let db_tool = new db_tools(sequelize)

const app = express();
const port = process.env.PORT || 8000;

const views = `${__dirname}/views/`;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session({
  key: 'user_sid',
  secret: '323123123',
  resave: true,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  } 
}));

app.get("/", (req,res)=>{
  res.sendFile(views + 'login.html');
});

app.get("/about",(req,res) => {
  res.sendFile(views + 'about.html');
});

app.get("/contact", (req,res) => {
  res.sendFile(views + 'contact.html');
});

app.get("/login", (req,res) => {
  res.sendFile(views + 'login.html');
});

app.get("/signup", (req,res) => {
  res.sendFile(views + 'signup.html');
});

// TEST GET REQUEST to return true
app.get("/professortest", (req,res) => {
  res.send( { isprofessor: true });
});

app.post("/signup", (req,res) => {
  db_tool.users.create_user(
		req.body.firstname,
		req.body.lastname,
		req.body.inputEmail,
		req.body.password
	);
  // res.redirect("/");
  res.send({ signup: true });
});

app.post("/login", (req, res) => {
  db_tool.users.verify_user(req.body.inputEmail, req.body.password)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/get_events", (req, res) => {
  db_tool.events.get_events(req.body.userid)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/add_event", (req, res) => {
  db_tool.events.add_event(
      req.body.classid,
      req.body.eventtype,
      req.body.eventtitle,
      req.body.eventdescription,
      req.body.eventdate
  );
});

app.post("/update_event", (req, res) => {
  db_tool.events.update_event(
      req.body.eventid,
      req.body.eventtype,
      req.body.eventtitle,
      req.body.eventdescription,
      req.body.eventdate
  );
});

app.post("/delete_event", (req, res) => {
  db_tool.events.delete_event(
      req.body.eventid
  );
});

app.get("*", (req,res) => {
  res.sendFile(views + '404.html');
});


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
