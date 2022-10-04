//heroku test last used 11/1/2021
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();

var filePath = request;
if (filePath == '/')
  filePath = '/main.html';

filePath = __dirname+filePath;
var extname = path.extname(filePath);
var contentType = 'text/html';

switch (extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
}



const PORT=8080; 
app.use(express.static(path.join(__dirname, '/')));


fs.readFile(filePath, function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": contentType });  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});