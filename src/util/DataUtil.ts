import {Monster} from "../modell/monster/Monster";
import {Family} from "../modell/family";
import {GrowthTable} from "../modell/monster/GrowthTable";
import {Skill} from "../modell/skill/Skill";
import {BreedingRule} from "../modell/breeding/BreedingRule";

export enum GAME {DWM1 = 'dwm1'}

const fs = require('fs');
var path = require('path');


var appDir = path.dirname(require.main.filename);
var dataDir = path.join(appDir, '..', 'data');

export function loadFamilies(game:GAME){
    let result: Family[] = undefined;
    const json = path.join(dataDir, game.toLowerCase(),  'family.json');
    const families: Family[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    result = families
    return result
}

export function loadGrowth(game:GAME){
    let result: GrowthTable = undefined;
    const json = path.join(dataDir, game.toLowerCase(),  'monster.json');
    const table: GrowthTable = JSON.parse(fs.readFileSync(json, 'utf-8'))
    result = table
    return result
}

export function loadSKills(game:GAME){
    let result: Skill[] = undefined;
    const json = path.join(dataDir, game.toLowerCase(),  'skill.json');
    const skills: Skill[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    result = skills
    return result
}

export function loadMonsters(game:GAME){
    let result: Monster[] = undefined;
    const json = path.join(dataDir, game.toLowerCase(),  'monster.json');
    const monsters: Monster[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    result = monsters
    return result
}

export function loadBreedingRules(game:GAME){
    let result: BreedingRule[] = undefined;
    const json = path.join(dataDir, game.toLowerCase(),  'monster.json');
    const rules: BreedingRule[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    result = rules
    return result
}