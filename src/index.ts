//load css
import './gui/css/main.scss';

import { GAME} from "./util/DataUtil";
import {IState} from 'choo'
import * as EventEmitter from "events";
import Choo = require("choo");
var choo = require('choo')

import {fetchBreedingRules, fetchFamilies, fetchGrowth, fetchMonsters, fetchSKills} from "./util/FetchUtil";
import MainView from "./gui/templates/MainView";
var html = require('choo/html');

// initialize choo
var app = choo();

app.use((state: IState, emitter: EventEmitter) => {
    state.game = GAME.DWM1;
    state.monsters = [];
    state.families = [];
    state.skills = [];
    state.grwothTable = undefined;
    state.breedingRules = [];

    fetchFamilies(state.game, (data) => {
        state.families = data;
        fetchSKills(state.game, (data) =>{
            state.skills = data;
            fetchGrowth(state.game, (data) => {
                state.growthTable = data;
                fetchMonsters(state.game, (data) => {
                    state.monsters = data;
                    fetchBreedingRules(state.game, (data) => {
                        state.breedingRules = data;
                        emitter.emit('render')
                    });
                });
            });
        });
    });

    emitter.on('openPage', function (page) {

    })

});

// define routes
app.route('/', MainView);


//app.route('/:user', placeholder)

// start app
const tree = app.start()
document.body.appendChild(tree)