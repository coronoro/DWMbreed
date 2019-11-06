import html from "choo/html";
import {Family} from "../../../model/game/family";
import {IState} from "choo";
import FamilyListItem from "../lists/FamilyListItem";
import {findFamilyById} from "../../../util/SearchUtil";


export default function (state: IState, emitter: any){
    let families: Family[] = state.families;
    if (state.query.id){
        const id = parseInt(state.query.id)
        families = [findFamilyById(id, families)]
    }
    return html`
    <body>
        <div class="list">
            ${families.map(FamilyListItem(state, emitter))}
        </div>
    </body>
    `
}