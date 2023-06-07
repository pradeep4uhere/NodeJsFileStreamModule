const events = require('events');
const emitter = new events.EventEmitter();

emitter.on('myemit',()=>{
    console.log("this is my event emitter");
});

emitter.on('myemit',(data)=>{
    console.log(`this is my event emitter with data ${data}`);
});


emitter.emit('myemit',"Hello this is my own emitter");


