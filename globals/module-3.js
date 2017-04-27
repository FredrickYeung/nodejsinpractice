// var myClass = require('./myclass'); //<co id="callout-globals-modules-require-1" />
// var module2 = require('./module-2'); //<co id="callout-globals-modules-require-2" />

console.log(require('./cache-test').message)
console.log(require('./cache-test').message = "hello")

Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key]
})

console.log(require.cache)

console.log(require('./cache-test').message)
