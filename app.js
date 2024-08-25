var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
    const filestream = fs.createReadStream('./content/big.txt','utf-8');
    filestream.on('open',(data)=>{

    })
    filestream.pipe(res)
    filestream.on('error',(err)=>{
        res.end(err);
    })
})
server.listen(5000)