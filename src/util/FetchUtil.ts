import {Family} from "../model/game/family";
import {GrowthTable} from "../model/game/monster/GrowthTable";
import {Skill} from "../model/game/skill/Skill";
import {Monster} from "../model/game/monster/Monster";
import {BreedingRule} from "../model/game/breeding/BreedingRule";
import {GAME} from "./DataUtil";


export function fetchAwaitJson(path:string): any{
    let result = undefined;
    const asyncFun = async () => {
        const response = await fetch(path);
        const json = await response.json();
        if(!response.ok){
            throw new Error("HTTP error " + response.status);
        }
        console.log(JSON.stringify(json));
        result = JSON.stringify(json)
    };
    asyncFun();
    return result
}

export function fetchJson<T>(game: GAME, jsonFile: string, callback: (data: T) => void){
    var url = require("../../data/"+game.toLowerCase()+"/"+jsonFile);
    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error("HTTP error " + response.status);
            }
            return response.json()})
        .then(data => {
            callback(data as T)
        })
        .catch(error =>{
            console.log(error);
        });
}

export function fetchFamilies(game:GAME, callback: (data: Skill[]) => void){
    return fetchJson(game,'family.json', callback)
}

export function fetchGrowth(game:GAME, callback: (data: GrowthTable) => void){
    return fetchJson(game,'growth.json', callback)
}

export function fetchSKills(game:GAME, callback: (data: Skill[]) => void){
    return fetchJson(game,'skill.json', callback)
}

export function fetchMonsters(game:GAME, callback: (data: Monster[]) => void){
    return fetchJson(game,'monster.json', callback)
}

export function fetchBreedingRules(game:GAME, callback: (data: BreedingRule[]) => void){
    return fetchJson(game,'breedingrules.json', callback)

}