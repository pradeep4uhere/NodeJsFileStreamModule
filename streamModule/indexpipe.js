const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res) =>{
fs.readFile('file.txt',function(err,data){
//     if(err) return console.error(err);
//     res.end(data.toString());
//     console.log(data.toString());
//   })

//2nd Way
const rstream = fs.createReadStream('file.txt');
// rstream.on('data',(chunkData)=>{
//     res.write(chunkData);
// })
// rstream.on('end',()=>{
//     res.end();
// })

// rstream.on('error',(err)=>{
//     console.log(err);
//     res.end("No File Found");
// })
rstream.pipe(res);
})



})




server.listen('8080','127.0.0.1');