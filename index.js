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
  res.sendFile(views + 'index.html');
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
  if (req.body.password !== req.body.password2){
    res.return(500);
  }
  db_tool.users.create_user(
		req.body.firstname,
		req.body.lastname,
		req.body.inputEmail,
		req.body.password
	);
  res.redirect("/");
});

app.post("/login", (req, res) => {
  db_tool.verify_user(req.body.inputEmail, req.body.password)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("*", (req,res) => {
  res.sendFile(views + '404.html');
});


app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
