module.exports.test = 'b'

const modA = require('./modeA')

console.log('modB:', modA.test)

module.exports.test = 'bb'