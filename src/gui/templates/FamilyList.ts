import html from "choo/html";
import {Family} from "../../model/game/family";
import {IState} from "choo";
import FamilyEntry from "./FamilyEntry";


export default function (state: IState){
    const families: Family[] = state.families;
    const mapFun = FamilyEntry(state);
    return html`
        <div class="family-list">
            ${families.map(mapFun)}
        </div>
    `
}