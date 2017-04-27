// var util = require('util')
// var events = require('events')

// // var AudioDevice = {
// //     play: function (track) {
// //         console.log('play:', track)
// //     },
// //     stop: function () {
// //         console.log('stop')
// //     }
// // }


// function MusicPlayer() {
//     this.playing = false
//     events.EventEmitter.call(this)
// }

// util.inherits(MusicPlayer, events.EventEmitter)

// var musicPlayer = new MusicPlayer()

// musicPlayer.on('play', function () {
//     this.playing = true
//     // AudioDevice.play(track)
// })

// musicPlayer.on('play', function (track) {
//     console.log('Track now playing:', track)
// })

// musicPlayer.on('stop', function () {
//     for (let i = 0; i < 10; i++) {
//         console.log(i)
//     }
//     this.playing = false
//     // AudioDevice.stop()
// })

// musicPlayer.once('play', function () {
//     this.audioFirstStarted = new Date()
// })

// musicPlayer.emit('play', 'The Roots - The Fire')
// console.log('playing:', musicPlayer.playing)

// setTimeout(function () {
//     musicPlayer.emit('stop')
//     console.log('playing:', musicPlayer.playing)
// }, 1000)

var EventEmitter = require('events').EventEmitter

function MusicPlayer(track) {
    this.track = track
    this.playing = false
    for (let methodName in EventEmitter.prototype) {
        this[methodName] = EventEmitter.prototype[methodName]
    }
}

MusicPlayer.prototype = {
    toString: function () {
        if (this.playing) {
            return 'Now playing: ' + this.track
        } else {
            return 'Stopped'
        }
    }
}

var musicPlayer = new MusicPlayer('Girl Talk - Still Here')

musicPlayer.on('play', function () {
    this.playing = true
    console.log(this.toString())
})

musicPlayer.emit('play')