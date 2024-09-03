//Import The HTTP module
const http = require('http');

//Define the Hostname and port
const hostname ="127.0.0.1";
const port ="1214";

//Create A HTTP Server
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello,World\n');
})

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})