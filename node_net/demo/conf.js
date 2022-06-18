const fs = require('fs')
let globalConf = {};
let conf = fs.readFileSync('./server.conf');
const confs = conf.toString().split('\n')

confs.forEach(item => {
    var itemConf = item.split('=')
    globalConf[itemConf[0]] = itemConf[1]
});
module.exports = {
    globalConf: globalConf
}