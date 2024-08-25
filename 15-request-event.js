const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.end('Welcome')
// })

// Use EventEmmiter API
const server=http.createServer();

// emits request event
// subscribe to it / listen for it / respond to it
server.on('request',(req,res)=>{
    console.log("object")
    res.end("Welcome");
})

server.listen(3000);