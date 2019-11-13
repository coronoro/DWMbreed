import html from 'choo/html';
import {IState} from "choo";
import {Monster} from "../../../model/game/monster/Monster";
import {EventEmitter} from "events";
import { getImageURL } from '../../../util/WebUtil';

export default  (state:IState, emitter:any) => (monster: Monster) =>{
    
    return html `
        <div class="monster row" onclick=${navigate}>
            <div class="cell">
                <img src="${getImageURL(monster,state.game)}">
            </div>
            <span class="cell">${monster.name}</span>
        </div>
    `

    function navigate () {
        emitter('pushState', '/?view=monster&id='+ monster.id)
    }
}