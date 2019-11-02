// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo();

var main = function () {
    return html`<div>choo animals</div>`
}

// create a route
app.route('/', main)


// start app
app.mount('div')