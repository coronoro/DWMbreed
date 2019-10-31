import {Monster} from "../modell/monster/Monster";
import {Skill} from "../modell/skill/Skill";
import {Family} from "../modell/Family";
import {BreedingRule} from "../modell/breeding/BreedingRule";



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

export function findMonsterById(id:number, monsters: Monster[]){
    const selected = monsters.filter(monster => monster.id == id)
    return selected[0]
}

export function findMonsterBySkill(skill: Skill, monsters:Monster[]){
    return monsters.filter(monster => monster.skills.includes(skill.id))
}

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

export function findResultBreedingRule(monster:Monster, rules: BreedingRule[]){
    return rules.filter(rule => rule.resultId == monster.id)
}
