// Importing and Exporting
const http = require('http')

const port = 2000

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.write(`<h1>hello user</h1>  
        <p>My server is on port ${port}</p>`)
        res.end()
        return
    }
    if (req.url === '/about') {
        res.write(`<h1>This is our About Page</h1>  
        <a href="/">GO Home</a>`)
        res.end()
        return
    }
    res.statusCode = 404
    res.write(`<h1>404 not found</h1>  
        <a href="/">GO Home</a>`)
        res.end()
});

server.listen(port, () => {
    console.log(`Server running on port ${port} | http://localhost:${port}/`);
})

