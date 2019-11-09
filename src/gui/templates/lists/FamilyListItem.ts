import {Monster} from "../../../model/game/monster/Monster";
import html from "choo/html";
import {Family} from "../../../model/game/family";
import {IState} from "choo";
import {findMonsterByFamily} from "../../../util/SearchUtil";
import MonsterListItem from "./MonsterListItem";


export default (state: IState, emitter: any) => (family: Family) => {
    if(!family){
        emitter('render')
        return html ``
    }
    const monsters: Monster[] = findMonsterByFamily(family, state.monsters);
    return html`
        <div class="family">
            <span class="title">${family.name}</span>
            <div class="list">
            ${monsters.map(MonsterListItem(emitter))}
            </div>
        </div>
    `
}