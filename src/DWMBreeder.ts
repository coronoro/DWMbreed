import {Monster} from "./modell/monster/Monster";
import {GAME, loadBreedingRules, loadFamilies, loadGrowth, loadMonsters, loadSKills} from "./util/DataUtil";
import {findMonster, findMonsterById, findResultBreedingRule} from "./util/SearchUtil";
import {Compound} from "./modell/breeding/Compound";

var game = GAME.DWM1
var families = loadFamilies(game)
let skills = loadSKills(game);
let growthTable = loadGrowth(game);
let monsters = loadMonsters(game);
let breedingRules = loadBreedingRules(game);





let desiredSkills = new Array(7)
desiredSkills.forEach( _ => {
    desiredSkills.push(Math.floor(Math.random() * 154))
})

let target = findMonster('WingSnake', monsters)





function dovetailing(target:Monster, desiredSkills:number[]){
    const collectedSKills = new Set()
    const collectSkills = (monster:Monster) => {
        monster.skills.forEach(skill => collectedSKills.add(skill))
    }

    let queue = [];
    queue.push(target);
    collectSkills(target)

    let tempQueue:Monster[] = [];
    const addCompoundMonsters = (compound: Compound) => {
        if (compound.type == 'Family'){
            const familyMonsters = monsters.filter( monster => monster.familyId == compound.ref)
            familyMonsters.forEach(item => {
                collectSkills(item)
                tempQueue.push(item)
            })
        }else{
            const find = findMonsterById(compound.ref,monsters)
            tempQueue.push(find)
        }
    };


    let circle = 0
    while(circle < 10){

        queue.forEach(monster => {
            const rules = findResultBreedingRule(monster, breedingRules)
            rules.forEach( rule => {
                addCompoundMonsters(rule.compound1)
                addCompoundMonsters(rule.compound2)
            })
            queue = tempQueue
        })
        circle++
    }




}









