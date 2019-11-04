// import choo


import {loadFamilies, GAME} from "./util/DataUtil";

var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo();

debugger
var families = loadFamilies(GAME.DWM1)
var main = function () {
    return html`<div>${families}</div>`
}

// create a route
app.route('/', main)


// start app
app.mount('div')