// events module
// node.js has a built -in module ,called "events"
// where you can create-, fire - , and listen for - your own events

// example 1-registering for the event to be fired only one time using once
// example 2-create an event emitter instance and register a couple of callbacks
// example 3-registering for the event with callback parameters

const EventEmitter = require('events');// class

const event =new EventEmitter();//object

// event.on("sayMyName", ( ) =>
// {
//     console.log("my name is kaustubh");
// })
// event.on("sayMyName", ( ) =>
// {
//     console.log("my name is singh");
// })
// event.on("sayMyName", ( ) =>
// {
//     console.log("my name is kaushu");
// })

// event.emit("sayMyName");//event

//the concept is quite simple: 
// emitter objects emit named events that cause 
// previously registered listeneres to be called .
// So , an emitter object basically has two main features

// Emitting name Events .
// Registring and unregistering listener functions

event.on("checkpage", (sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})
event.emit("checkpage",200,"ok")