import {IState} from "choo";
import html from 'choo/html';
import {findMonsterById, findMonsterBySkill, findSkillById, findSkillsByMonster} from "../../../util/SearchUtil";
import SkillListItem from "../lists/SkillListItem";
import MonsterListItem from "../lists/MonsterListItem";

export default function(state: IState, emitter:any){
    const id = parseInt(state.query.id)
    const skill = findSkillById(id, state.skills)
    if(!skill){
        emitter('render')
        return html ``
    }
    const monsters = findMonsterBySkill(skill, state.monsters)

    return html `
<div class="monster view">
    <div>
        <div>${skill.name}</div>    
        <div>${skill.description}</div>    
        <div class="list">
            ${monsters.map(MonsterListItem(state,emitter))}
        </div>               
    </div>

</div>
    `

}