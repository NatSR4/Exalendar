// Imports
const http = require('http');
const express = require('express')
const app = express()
const port = 8080
const mysql = require('mysql')
var bodyParser = require('body-parser');
require('dotenv').config()
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.set('views', __dirname + '/public/views');

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// SQL Connection
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME,
  });


// Navigation
app.get('', (req, res) => {
    res.render('main.html')
})

app.post('/submit-event', urlencodedParser, function (req, res) {
    console.log(req.body);
    var class_id = 1;
    var event_title = req.body.ename;
    var event_type = req.body.etype;
    var event_description = req.body.edetails;
    var event_date = req.body.edate + " " + req.body.etime;
    console.log(event_date)
    const sql_code = `INSERT INTO events (class_id, event_type, event_title, event_description, event_date) VALUES (
        ${"'"+class_id+"'"},
        ${"'"+event_type+"'"},
        ${"'"+event_title+"'"},
        ${"'"+event_description+"'"},
        ${"'"+event_date+"'"}
    )`;


    connection.query(sql_code, function (err) {
        if (err) throw err;
        console.log("One record inserted");
    });
    res.render('main.html', { data: req.body });
});


app.get('/contact', (req, res) => {
   res.render('contact.html')
})

app.get('/login', (req, res) => {
    res.render('login.html')
 })

app.get('/loginPrimary', (req, res) => {
    res.render('loginPrimary.html')
})

app.get('/signup', (req, res) => {
    res.render('signup.html')
})

app.get('/calendar', (req, res) => {
    res.render('calendar.html')
})

app.get('/professors', (req, res) => {
    res.render('professors.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))