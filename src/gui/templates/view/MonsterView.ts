import {IState} from "choo";
import html from 'choo/html';
import {findFamily, findFamilyById, findMonsterById, findSkillByMonster} from "../../../util/SearchUtil";
import SkillListItem from "../lists/SkillListItem";

export default function(state: IState, emitter:any){
    const id = parseInt(state.query.id)
    const monster = findMonsterById(id, state.monsters)
    const family = findFamilyById(monster.id, state.families)
    const skills = findSkillByMonster(monster, state.skills)

    return html `
<body>
    <div class="monster view">
        <h3>
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
        
        </div>
    </div>
</body>
    `
    function navigate () {
        emitter('pushState', '/family?id='+ family.id)
    }
}