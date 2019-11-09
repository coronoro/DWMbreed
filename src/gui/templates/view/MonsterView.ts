import {IState} from "choo";
import html from 'choo/html';
import {getCompoundMonsters, findFamilyById, findMonsterById, findSkillsByMonster, findResultBreedingRule} from "../../../util/SearchUtil";
import SkillListItem from "../lists/SkillListItem";
import BreedingRuleListItem from "../lists/BreedingRuleListItem";
import {Family} from "../../../model/game/family";
import {Skill} from "../../../model/game/skill/Skill";

export default function(state: IState, emitter:any){
    const id = parseInt(state.query.id)
    const monster = findMonsterById(id, state.monsters)
    if(!monster){
        emitter('render')
        return html ``
    }
    const family = findFamilyById(monster.familyId, state.families)
    const skills = findSkillsByMonster(monster, state.skills)
    const createRules = findResultBreedingRule(monster, state.breedingRules)


    return html `
<div class="monster view">
    <div>
        <div>${monster.name}</div>    
        <h3>Family</h3>
        <span onclick=${navigate}>
            ${family.name}
        </span>
        <h3>Skills</h3>
        <div class="list">
            ${skills.map(SkillListItem(emitter))}
        </div>   
        <h3>Max. Level</h3>
        <span>${monster.maxLvl}</span>            
    </div>
    <div>
        <div>
            <h3>Bred From</h3>
            <div>
                ${createRules.map(BreedingRuleListItem(state, emitter))}
            </div>
        </div>
        <div>
            <h3>Used in</h3>
            <div>
            
            </div>
        </div>
    </div>
</div>
    `
    function navigate () {
        emitter('pushState', '/?view=familyList&id='+ family.id)
    }
}