var http = require("http");
var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end(`<h1>This is Our Home Page</h1> <a href="/about">Go to about page</a>`);
        return;
    }
    if (req.url == "/about") {
        res.end(`<h1>This is Our About Page</h1> 
                <a href="/">Go to home page</a>`);
        return;
    }
    res.end(`<h1>Opps !</h1> <p>Check the url and try again</p>
             <a href="/">Go to home page</a>`);
});

server.listen(3000, (result, err) => {
    console.warn("this is a local server on http://localhost:3000/");
    console.log("Running on port 3000---");
});


class FirstClass{
    constructor (names) {
        this.names = names
    }
    method() {
        console.log("From class one");
    }
}
class SecondClass extends FirstClass{
    constructor (names) {
        super(names)
        this.my = "book";
    }
    method() {
        console.log("name is ", this.my);
        super.method()
    }
}

var classes = new FirstClass("boom")
var classNew = new SecondClass("cat")
classNew.method()