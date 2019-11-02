import {Identifiable} from '../../Identifiable'
import {SkillConstraint} from "./SkillConstraint";

export class Skill extends Identifiable{

    name: string;
    description: string;
    levelRequirement: number;
    constraints: SkillConstraint[];
    upgradedFrom: number;
    mpCost:number;

    constructor(name: string, description: string){
        super();
        this.name = name;
        this.description = description
        this.mpCost = -1
    }

}