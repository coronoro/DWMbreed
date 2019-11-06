import {Monster} from "../model/game/monster/Monster";
import {Skill} from "../model/game/skill/Skill";
import {Family} from "../model/game/family";
import {BreedingRule} from "../model/game/breeding/BreedingRule";



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
}

export function findMonsterById(id:number, monsters: Monster[]){
    const selected = monsters.filter(monster => monster.id == id);
    return selected[0]
}

export function findMonsterByFamily(family:Family, monsters:Monster[]){
    return monsters.filter(monster => monster.familyId == family.id)
}

export function findMonsterBySkill(skill: Skill, monsters:Monster[]){
    return monsters.filter(monster => monster.skills.includes(skill.id))
}

export function findSkill(name: String, skills:Skill[]){
    let result : Skill = undefined;
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

export function findSkillByMonster(monster:Monster, skills: Skill[]){
    const list = skills.filter(skill => monster.skills.includes(skill.id));
    return list
}

export function findSkillById(id:number, skills: Skill[]){
    const selected = skills.filter(skill => skill.id == id);
    return selected[0]
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
}
export function findResultBreedingRule(monster:Monster, rules: BreedingRule[]){
    return rules.filter(rule => rule.resultId == monster.id)
}
