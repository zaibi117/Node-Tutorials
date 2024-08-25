const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) => {
    console.log(`Data recived user ${name} with id ${id}`);
})
customEmitter.on('response', () => {
    console.log("Some other Logic")
})
customEmitter.emit('response','zaibi',34)
