import {Monster} from "../game/monster/Monster";
import {Identifiable} from "../Identifiable";
import {TreeNode} from "../tree/TreeNode";
import {BreedingRule} from "../game/breeding/BreedingRule";
import {getCompoundMonsters, findResultBreedingRule} from "../../util/SearchUtil";

export class BreedingStrategy extends Identifiable{

    desiredSkills:number[];
    collectedSKills: Set<number>;
    nodeQueue: TreeNode<Monster>[];
    treeRoot: TreeNode<Monster>;

    allMonsters: Monster[];
    allRules: BreedingRule[];

    viewedMonsters: Set<Monster>;


    constructor(root: Monster, desiredSkills:number[], monsters: Monster[], breedingRules: BreedingRule[]){
        super();
        this.desiredSkills = desiredSkills;
        this.collectedSKills = new Set();
        this.viewedMonsters = new Set();
        this.treeRoot = new TreeNode(root);
        this.nodeQueue = [];
        //init
        this.collectSkills(root);
        this.viewedMonsters.add(root);
        this.nodeQueue.push(this.treeRoot);

        this.allMonsters = monsters;
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
        const emptyQueue: TreeNode<Monster>[] = [];
        this.nodeQueue.forEach(treeNode => {
            const monster = treeNode.value;
            const rules = findResultBreedingRule(monster, this.allRules);
            rules.forEach(rule => {
                const compound1Monsters = getCompoundMonsters(rule.compound1, this.allMonsters);
                compound1Monsters.forEach(entry => {
                    if (!this.alreadyViewed(entry)){
                        this.collectSkills(entry);
                        const node = new TreeNode(entry);
                        treeNode.right.push(node);
                        emptyQueue.push(node);
                        this.viewedMonsters.add(entry)
                    }

                });
                const compound2Monsters = getCompoundMonsters(rule.compound2, this.allMonsters);
                compound2Monsters.forEach(entry => {
                    if (!this.alreadyViewed(entry)) {
                        this.collectSkills(entry);
                        const node = new TreeNode(entry);
                        treeNode.left.push(node);
                        emptyQueue.push(node);
                        this.viewedMonsters.add(entry)
                    }
                })
            })
        });
        this.nodeQueue = emptyQueue
    }

}