import {Monster} from "../modell/monster/Monster";
import {Skill} from "../modell/skill/Skill";
import {Family} from "../modell/Family";


export function findMonster(name: String, monsters: Monster[]){
    let result: Monster = undefined;
    monsters.forEach(monster => {
        if (monster.name.toLowerCase() == name.toLowerCase()){
            result = monster
        }
    });
    if (!result){
        throw Error('no monster found for: ' + name)
    }
    return result
};

export function findSkill(name: String, skills:Skill[]){
    let result : Skill = undefined
    skills.forEach(skill => {
        if (skill.name.toLowerCase() == name.toLowerCase()){
            result = skill
        }
    });

    if (!result){
        throw Error('no SKill found for: ' + name)
    }
    return result
}

export  function findFamily (name: String, families: Family[]){
    let result = undefined;
    families.forEach(family => {
        if (family.name.toLowerCase() == name.toLowerCase()){
            result = family
        }
    });
    if (!result){
        throw Error('no family found for: ' + name)
    }
    return result
};
