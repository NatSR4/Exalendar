const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/ProfessorPages'));
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/profile.html'));
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/main.html'));
});

app.get('/ProfessorPages', function(req, res) {
  res.sendFile(path.join(__dirname, '/Professors.html'));
});

app.get('/LoginSignup', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/signup.html'));
});

app.get('/Official', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/official.html'));
})

app.listen(port);
console.log('Server started at http://localhost:' + port);