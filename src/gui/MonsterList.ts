import html from 'choo/html';
import {IState} from "choo";
import monsterItem from "./MonsterItem";
import {Monster} from "../model/game/monster/Monster";



export default function (monsters: Monster[]){
    return html`
        <div class="list">
            ${monsters.map(monsterItem)}
        </div>
    `
}