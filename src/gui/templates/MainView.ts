import {IState} from "choo";
import {findFamilyById, findMonsterById, findSkillsByMonster} from "../../util/SearchUtil";
import html from "choo/html";
import SkillListItem from "./lists/SkillListItem";
import MonsterView from "./view/MonsterView";
import FamilyListView from "./view/FamilyListView";
import IndexView from "./lists/IndexView";
import SkillView from "./view/SkillView";





export enum VIEWS {
    INDEX = 'index',
    MONSTER = 'monster',
    SKILL = 'skill',
    FAMILY_LIST='familyList'}

export default function(state: IState, emitter:any){
    console.log('render mainview');
    const view = state.query.view;
    let template = IndexView(state,emitter);
    if(view){
        switch(view){
            case VIEWS.MONSTER:
                template = MonsterView(state,emitter);
                break;
            case VIEWS.SKILL:
                template = SkillView(state,emitter);
                break;
            case VIEWS.FAMILY_LIST:
                template = FamilyListView(state,emitter);
                break;
            default:
                template = IndexView(state,emitter);
                break;
        }
    }


    return html `
<body>
    <div class="head">
        <h1>Dragon Quest Monster Breeder</h1>
        <div class="navigation">
            <ul>
                <li onclick="${navigate(VIEWS.INDEX)}">Index</li>
                <li onclick="${navigate(VIEWS.FAMILY_LIST)}">Monster List</li>
            </ul>
        </div>
    </div>
    <div class="body">
        ${template}
    </div>
    <div class="fotter">
        Footer
    </div>
</body>
    `

    function navigate (view: string) {
        return () =>{
            emitter('pushState', '/?view=' +view)
            emitter('render')
        }
    }
}