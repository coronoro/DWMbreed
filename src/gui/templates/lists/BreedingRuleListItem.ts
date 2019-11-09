import html from 'choo/html';
import {IState} from "choo";
import {Monster} from "../../../model/game/monster/Monster";
import { BreedingRule } from '../../../model/game/breeding/BreedingRule';
import { findMonsterById, getCompoundMonsters, findFamilyById } from '../../../util/SearchUtil';
import { Family } from '../../../model/game/family';

function familyRef(family: Family, navigation:any){
    return html`
    <div onclick=${navigation(family)}>
        ${family.name}*
    </div>`
}

function monsterRef(monster:Monster, navigation:any){
    return html`
    <div onclick=${navigation(monster)}>
        ${monster.name}
    </div>`

    
}


export default  (state:IState,emitter:any) => (rule: BreedingRule) =>{
    const result = findMonsterById(rule.resultId, state.monsters)

    let compound1Ref: HTMLElement = undefined
    if(rule.compound1.type === 'Family'){
        const family = findFamilyById(rule.compound1.ref, state.families)
        compound1Ref = familyRef(family, navigateFamily)
    }else {
        const monster = getCompoundMonsters(rule.compound1, state.monsters)
        compound1Ref = monsterRef(monster[0], navigateMonster)
    }

    let compound2Ref: HTMLElement = undefined
    if(rule.compound2.type === 'Family'){
        const family = findFamilyById(rule.compound2.ref, state.families)
        compound2Ref = familyRef(family, navigateFamily)
    }else {
        const monster = getCompoundMonsters(rule.compound2, state.monsters)
        compound2Ref = monsterRef(monster[0], navigateMonster)

    }
    
    return html `
        <div class="breeding-rule item" >
            <div class="entry">
                ${compound1Ref}
            </div>
            <div class="entry">
                ${compound2Ref}
            </div>
            
            <div class="result" onclick=${navigateResult}>
                ${result.name}
            </div>
        </div>
    `

    function navigateResult () {
        emitter('pushState', '/?view=monster&id='+ result.id)
    }

    function navigateMonster (monster:Monster) {
        return () =>{
            emitter('pushState', '/?view=monster&id='+ monster.id)
        }
    }

    function navigateFamily (family:Family) {
        return () =>{
            emitter('pushState', '/?view=familyList&id='+ family.id)
        }
        
    }
}