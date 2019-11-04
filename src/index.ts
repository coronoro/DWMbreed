// import choo


import { GAME} from "./util/DataUtil";
import {IState} from 'choo'
import MonsterList from "./gui/MonsterList";
import {Monster} from "./model/game/monster/Monster";
import * as EventEmitter from "events";
import Choo = require("choo");
import {fetchBreedingRules, fetchFamilies, fetchGrowth, fetchMonsters, fetchSKills} from "./util/FetchUtil";
var html = require('choo/html')

// initialize choo
var app = new Choo();

app.use((state: IState, emitter: EventEmitter) => {
    state.game = GAME.DWM1;
    state.monsters = []
    state.families = []
    state.skills = []
    state.grwothTable = undefined
    state.breedingRules = []

    fetchFamilies(state.game, (data) => {
        state.families = data;
        fetchSKills(state.game, (data) =>{
            state.skills = data;
            fetchGrowth(state.game, (data) => {
                state.growthTable = data;
                fetchMonsters(state.game, (data) => {
                    state.monsters = data
                    fetchBreedingRules(state.game, (data) => {
                        state.breedingRules = data
                        emitter.emit('render')
                    });
                });
            });
        });
    });





})

// create a route
app.route('/', MonsterList)


// start app
app.mount('div')