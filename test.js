//heroku test last used 11/1/2021
var http = require('http');
var fs = require('fs').promises;

const host = 'localhost';
const PORT=8080; 


const server = http.createServer(function (req, res) {
    console.log(res);
    fs.readFile(__dirname + "/main.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
    
});
server.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});

/* fs.readFile('main.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
}); */