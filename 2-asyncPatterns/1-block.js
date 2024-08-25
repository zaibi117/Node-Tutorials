const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    else if (req.url === '/about')
    {
        //Blocking code
        // for(let i=0;i<1000;i++){
        //     for(let j=0;j<1000;j++){
        //         console.log(`${i} ${j}`)
        //     }
        // }
        res.end('This is a about page');
    }
    else
    {
        res.end('ERROR page not found');
    }


})

server.listen(5000, () => {
    console.log('listening on port 5000');
})