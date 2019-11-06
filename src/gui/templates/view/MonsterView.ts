import {IState} from "choo";
import html from 'choo/html';
import {findMonsterById, findSkillByMonster} from "../../../util/SearchUtil";
import SkillListItem from "../lists/SkillListItem";

export default function(state: IState, emitter:any){
    const id = parseInt(state.query.id)
    const monster = findMonsterById(id, state.monsters)
    const skills = findSkillByMonster(monster, state.skills)

    return html `
<body>
    <div class="monster view">
        <div>
            <div>${monster.name}</div>    
            <div class="list">
                ${skills.map(SkillListItem(emitter))}
            </div>               
        </div>
        <div>
        
        </div>
    </div>
</body>
    `

}