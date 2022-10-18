// Imports
var http = require('http');
const express = require('express')
const app = express()
const port = 8080

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))
app.set('views', __dirname + '/public/views');

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// Navigation
app.get('', (req, res) => {
    res.render('main.html')
})

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