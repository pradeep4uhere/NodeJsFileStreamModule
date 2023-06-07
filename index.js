const http = require('http');
const url = require('url');
const server = http.createServer();


server.on('request',(req,res)=>{
    const path = req.url;

    if(path ==='/'){
        console.log("this is home page");
        res.end("This is Home Page");
    }else if(path ==='/java'){
        console.log("this is Java page");
        res.end("This is Java Page");
    }else{
        res.end("Not Found Page");
    }
    
}).listen(8080,()=>{
    console.log("Server Started and Listen to Port 8080");
});