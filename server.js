var http = require("http");
var fs = require('fs')

nn
const homePage = fs.readFileSync('./Fontend/test/home.html')

// res for response
// req for request

var server = http.createServer((req, res) => {
    console.clear()
    console.log('you are connected---');
    console.log(req.url);
    if (req.url == "/") {
        res.write(homePage)
        res.end()
        return;
    }
    if (req.url == "/about") {
        res.end(`<h1>This is Our About Page</h1> 
                <a href="/">Go to home page</a>`);
        return;
    }
    res.statusCode = 404
    res.end(`<h1>Opps !</h1> <p>Check the url and try again</p>
             <a href="/">Go to home page</a>`);
});

server.listen(3000, (result, err) => {
    console.warn("this is a local server on http://localhost:3000/");
    console.log("Running on port 3000---");
});
