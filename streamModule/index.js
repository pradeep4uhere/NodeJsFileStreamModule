const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) =>{
fs.readFile('file.txt',function(err,data){
    if(err) return console.error(err);
    res.end(data.toString());
    //console.log(data.toString());
  })
})
server.listen('8080','127.0.0.1');