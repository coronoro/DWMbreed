import {Monster} from "../../model/game/monster/Monster";
import html from "choo/html";
import {Family} from "../../model/game/family";
import MonsterList from "./MonsterList";
import {IState} from "choo";
import {findMonsterByFamily} from "../../util/SearchUtil";


export default (state: IState) => (family: Family) => {
    const monsters: Monster[] = findMonsterByFamily(family, state.monsters);
    return html`
        <div class="family">
            <span class="title">${family.name}</span>
            ${MonsterList(monsters)}
        </div>
    `
}