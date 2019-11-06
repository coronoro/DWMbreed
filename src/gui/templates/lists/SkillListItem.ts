import html from 'choo/html';
import {IState} from "choo";
import {Skill} from "../../../model/game/skill/Skill";

export default  (emitter:any) => (skill: Skill) =>{
    return html `
        <div class="skill item" onclick=${navigate}>
            ${skill.name}
        </div>
    `

    function navigate () {
        emitter('pushState', '/skill?id='+ skill.id)
    }
}