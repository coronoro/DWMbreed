import html from 'choo/html';
import {IState} from "choo";
import {Monster} from "../../../model/game/monster/Monster";
import {EventEmitter} from "events";

export default  (emitter:any) => (monster: Monster) =>{
    return html `
        <div class="monster item" onclick=${navigate}>
            ${monster.name}
        </div>
    `

    function navigate () {
        emitter('pushState', '/monster?id='+ monster.id)
    }
}