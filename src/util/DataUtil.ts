import {Monster} from "../model/game/monster/Monster";
import {Family} from "../model/game/family";
import {GrowthTable} from "../model/game/monster/GrowthTable";
import {Skill} from "../model/game/skill/Skill";
import {BreedingRule} from "../model/game/breeding/BreedingRule";

export enum GAME {DWM1 = 'dwm1'}

import path = require('path');


/*

export function fetchJson(path:string){
    let result = undefined

    const asyncFun = async () => {
        const response = await fetch(path)
        if(!response.ok){
            throw new Error("HTTP error " + response.status);
        }
        await response.json()
    }
    return asyncFun()
}

*/

export function load<T>(game:GAME, jsonFile: string){
    var json = require("../../data/"+game.toLowerCase()+"/"+jsonFile);
    if(typeof json === 'string'){
        //const promise = fetchJson(json.toString()).then(value => console.log(value))
        console.log(json);
    }
    return json as T

}

export function loadFamilies(game:GAME){
    let result: Family[] = undefined;
    result = load<Family[]>(game,'family.json');
    return result
}



export function loadGrowth(game:GAME){
    let result: GrowthTable = undefined;
    // const json = path.join(dataDir, game.toLowerCase(),  'monster.json');
    // const table: GrowthTable = JSON.parse(fs.readFileSync(json, 'utf-8'))
    // result = table
    return result
}

export function loadSKills(game:GAME){
    let result: Skill[] = undefined;
    // const json = path.join(dataDir, game.toLowerCase(),  'skill.json');
    // const skills: Skill[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    // result = skills
    return result
}

export function loadMonsters(game:GAME){
    let result: Monster[] = undefined;
    // const json = path.join(dataDir, game.toLowerCase(),  'monster.json');
    // const monsters: Monster[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    // result = monsters
    return result
}

export function loadBreedingRules(game:GAME){
    let result: BreedingRule[] = undefined;
    // const json = path.join(dataDir, game.toLowerCase(),  'breedingrules.json');
    // const rules: BreedingRule[] = JSON.parse(fs.readFileSync(json, 'utf-8'))
    // result = rules
    return result
}