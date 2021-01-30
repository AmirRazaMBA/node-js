var events = require('events');
var eventEmitter = new events.EventEmitter();

var coffeeEventHandler = function(){
    console.log("1. Coffee is ready!");
}

var eggEventHandler = function(){
    console.log("2. Egg is ready!");
}

var teaEventHandler = function(){
    console.log("1*. TEA is ready!");
}

// Assign event handlers to the events

eventEmitter.addListener('coffee', coffeeEventHandler);
eventEmitter.addListener('coffee', teaEventHandler);
eventEmitter.on('egg', eggEventHandler);

// Fire the events

eventEmitter.emit('coffee');
eventEmitter.emit('egg');

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'coffee');
console.log(eventListeners + " Listner(s) listening to coffee event");

// Remove the binding of tea function
eventEmitter.removeListener('coffee', teaEventHandler);

// Fire the events

eventEmitter.emit('coffee');
eventEmitter.emit('egg');