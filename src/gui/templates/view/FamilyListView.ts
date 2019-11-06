import html from "choo/html";
import {Family} from "../../../model/game/family";
import {IState} from "choo";
import FamilyListItem from "../lists/FamilyListItem";


export default function (state: IState, emitter: any){
    const families: Family[] = state.families;
    return html`
    <body>
        <div class="list">
            ${families.map(FamilyListItem(state, emitter))}
        </div>
    <body>
    `
}