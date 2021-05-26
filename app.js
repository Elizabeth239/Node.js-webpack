//const fs=require('fs');
const parser=require("./parser.js")
let eventName="parser";
const Emitter=require("events");
let emitter= new Emitter();
let myText=`2020-02-03T13:50:33.166Z A 3\n2020-02-03T13:51:33.166Z B 1\n2020-02-03T13:52:33.166Z C 6\n2020-02-03T13:53:33.166Z B 8\n2020-02-03T13:54:33.166Z B 5`;
emitter.on(eventName, function(myText){
	parser.Parser(myText)
});
emitter.emit(eventName,myText);

// var parser = require("./parser.js");
// let reader=fs.createReadStream("text.txt","utf8");
// let text=new Parser(reader);

