import {IState} from "choo";
import html from "choo/html";
import {VIEWS} from "../MainView";
import FamilyListView from "../view/FamilyListView";
import MonsterView from "../view/MonsterView";

export default function(state: IState, emitter:any){




    return html `
    <h2>Hello There</h2>
    <p>Some Text Here.</p>
    `

}