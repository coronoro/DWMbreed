import {Monster} from "../game/monster/Monster";
import {Identifiable} from "../Identifiable";
import {TreeNode} from "../tree/TreeNode";
import {BreedingRule} from "../game/breeding/BreedingRule";
import {Compound} from "../game/breeding/Compound";
import {findMonsterById, findResultBreedingRule} from "../../util/SearchUtil";
import {loadMonsters} from "../../util/DataUtil";

export class BreedingStrategy extends Identifiable{

    desiredSkills:number[];
    collectedSKills: Set<number>;
    nodeQueue: TreeNode<Monster>[];
    treeRoot: TreeNode<Monster>;

    allMonsters: Monster[]
    allRules: BreedingRule[]

    viewedMonsters: Set<Monster>


    constructor(root: Monster, desiredSkills:number[], monsters: Monster[], breedingRules: BreedingRule[]){
        super();
        this.desiredSkills = desiredSkills;
        this.collectedSKills = new Set()
        this.viewedMonsters = new Set()
        this.treeRoot = new TreeNode(root)
        this.nodeQueue = []
        //init
        this.collectSkills(root)
        this.viewedMonsters.add(root)
        this.nodeQueue.push(this.treeRoot)

        this.allMonsters = monsters
        this.allRules = breedingRules
    }

    collectSkills(monster:Monster){
        monster.skills.forEach(skill => this.collectedSKills.add(skill))
    }

    collectedAll(){
        return this.desiredSkills.every(it => this.collectedSKills.has(it))
    }

    private alreadyViewed(monster:Monster){
        return this.viewedMonsters.has(monster)
    }

    step(){
        const emptyQueue: TreeNode<Monster>[] = []
        this.nodeQueue.forEach(treeNode => {
            const monster = treeNode.value
            const rules = findResultBreedingRule(monster, this.allRules)
            rules.forEach(rule => {
                const compound1Monsters = this.getCompoundMonsters(rule.compound1)
                compound1Monsters.forEach(entry => {
                    if (!this.alreadyViewed(entry)){
                        this.collectSkills(entry)
                        const node = new TreeNode(entry)
                        treeNode.right.push(node)
                        emptyQueue.push(node)
                        this.viewedMonsters.add(entry)
                    }

                })
                const compound2Monsters = this.getCompoundMonsters(rule.compound2)
                compound2Monsters.forEach(entry => {
                    if (!this.alreadyViewed(entry)) {
                        this.collectSkills(entry)
                        const node = new TreeNode(entry)
                        treeNode.left.push(node)
                        emptyQueue.push(node)
                        this.viewedMonsters.add(entry)
                    }
                })
            })
        });
        this.nodeQueue = emptyQueue
    }

    private getCompoundMonsters = (compound: Compound) => {
        let queue = []
        if (compound.type == 'Family'){
            const familyMonsters = this.allMonsters.filter(monster => monster.familyId == compound.ref)
            familyMonsters.forEach(item => {
                queue.push(item)
            })
        }else{
            const find = findMonsterById(compound.ref,this.allMonsters)
            queue.push(find)
        }
        return queue
    };

}