import {Monster} from "./model/game/monster/Monster";
import {GAME, loadBreedingRules, loadFamilies, loadGrowth, loadMonsters, loadSKills} from "./util/DataUtil";
import {findMonster, findMonsterById, findResultBreedingRule, findSkill, findSkillById} from "./util/SearchUtil";
import {Compound} from "./model/game/breeding/Compound";
import {BreedingStrategy} from "./model/strategy/BreedingStrategy";

var game = GAME.DWM1
var families = loadFamilies(game)
let skills = loadSKills(game);
let growthTable = loadGrowth(game);
let monsters = loadMonsters(game);
let breedingRules = loadBreedingRules(game);




let desiredSkills: number[] = []
let randomSkills = Array.from({length: 3}, () => Math.floor(Math.random() * 154));
randomSkills.forEach(skillId => {
    let skill = findSkillById(skillId, skills)
    if(skill.upgradedFrom){
        const downgrade = findSkillById(skill.upgradedFrom, skills)

        console.log(skill.name + ' -> ' + downgrade.name)
        desiredSkills.push(skill.upgradedFrom)
    }else{
        console.log(skill.name)
    }

})


let target = findMonster('WingSnake', monsters)


dovetailing(target, desiredSkills)


function dovetailing(target:Monster, desiredSkills:number[]){

    let queue = [];
    queue.push(target);


    const strategies: BreedingStrategy[] = []
    const rules = findResultBreedingRule(target, breedingRules)
    rules.forEach(rule => {
        const strategy = new BreedingStrategy(target, desiredSkills, monsters, breedingRules)
        strategies.push(strategy)
    })

    let circle = 0
    let successFullStrategy = undefined
    while(circle < 10 && !successFullStrategy){
        strategies.forEach( strategy => {
            strategy.step()
            if (strategy.collectedAll()){
                successFullStrategy = strategy
            }
        })
        circle++
    }
    console.log(successFullStrategy)
}









