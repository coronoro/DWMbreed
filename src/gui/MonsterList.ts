import html from 'choo/html';
import {IState} from "choo";
import monsterItem from "./MonsterItem";



export default function (state:IState){
    var monsters = state.monsters
    return html`
        <div class="list">
            ${monsters.map(monsterItem)}
        </div>
    `
}