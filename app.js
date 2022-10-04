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
    res.render('main.html', { text: 'Hey' })
})

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + 'contact.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + 'login.html')
 })

app.get('/loginPrimary', (req, res) => {
    res.sendFile(__dirname + 'loginPrimary.html')
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + 'signup.html')
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + 'signup.html')
})

app.get('/calendar', (req, res) => {
    res.sendFile(__dirname + 'calendar.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))