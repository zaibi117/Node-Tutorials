const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home Page!');
    }
    else if (req.url === '/about') {
        res.end('This is about page!');
    }
    else {
        res.write(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Click here to navigate back</a>
    `)
    } 
    res.end()
})

server.listen(5000);