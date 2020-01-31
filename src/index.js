var fs = require('fs')
var { dialog } = require('electron').remote

var root = fs.readdirSync('/')
console.log('root', root)

console.log('dialog', dialog)

