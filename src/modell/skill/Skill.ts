import {Identifiable} from '../identifiable'
import {SkillConstraint} from "./skillConstraint";

export class Skill extends Identifiable{

    name: String;
    description: String;
    levelRequirement: Number;
    constraints: SkillConstraint[];
    upgradedFrom: Number;

    constructor(name: String, description: String){
        super();
        this.name = name;
        this.description = description
    }

}