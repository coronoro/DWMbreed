import html from 'choo/html';
import {IState} from "choo";
import {Monster} from "../model/game/monster/Monster";


export default  function(monster: Monster){
    return html `
        <div class="monster item">
            ${monster.name}
        </div>
    `;
}