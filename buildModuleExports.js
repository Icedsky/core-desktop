/**
 * Created by rroussel on 26/04/2017.
 */
const fs = require('fs')
const glob = require('glob')
const path = require('path')

let classes = glob.sync('./lib/*.js')

let content = `var exp = {}

`
for(c of classes){
    content += `exp['${path.basename(c, '.js')}'] = require('./lib/${path.basename(c)}')
`
}

content += `
module.exports = exp`

fs.writeFile(__dirname + '/index.js', content, function (err) {
    if (err)
        return console.log(err);
});