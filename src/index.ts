// import choo


import {loadFamilies, GAME, loadMonsters} from "./util/DataUtil";
import {IState} from 'choo'
import MonsterList from "./gui/MonsterList";
import {Monster} from "./model/game/monster/Monster";

var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo();

app.use((state: IState) => {
    state.game = GAME.DWM1;
    state.monsters = [new Monster('foo', 0),new Monster('bar', 0)]

})



var families = loadFamilies(GAME.DWM1)


// create a route
app.route('/', MonsterList)


// start app
app.mount('div')