const dotenv = require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,
																process.env.DB_PSWD,{ host: process.env.DB_HOST,
																dialect: 'mysql' })
const db_tools = require('./database_tools')
let db_tool = new db_tools(sequelize)

const app = express();
const port = process.env.PORT || 8000;

const views = `${__dirname}/views/`;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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

app.get("*", (req,res) => {
  res.sendFile(views + '404.html');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
