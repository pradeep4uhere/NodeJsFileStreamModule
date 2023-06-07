const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) =>{

//Read File Using Data Stream
const rstream = fs.createReadStream('file.txt');

rstream.on('data',(chunkData)=>{
    res.write(chunkData);
})

rstream.on('end',()=>{
    res.end();
})

rstream.on('error',(err)=>{
    console.log(err);
    res.end("No File Found");
})
})

server.listen('8080','127.0.0.1');