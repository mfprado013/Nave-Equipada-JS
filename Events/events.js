const { EventEmitter } = require('events')
const ev = new EventEmitter()

ev.once('saySomething', (message) => {
  console.log('eu ouvi você:', message)
})

ev.emit('saySomething', "matheus")
ev.emit('saySomething', "matheus")
ev.emit('saySomething', "matheus")


