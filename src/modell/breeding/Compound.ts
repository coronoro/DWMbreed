import {Identifiable} from "../identifiable";

export class Compound{

    ref: Number;
    type: String;
    bonusRequirements: Number;


    constructor(content: Identifiable, bonusRequirements: Number = 0){
        this.ref = content.id;
        this.type = content.constructor.name;
        this.bonusRequirements = bonusRequirements
    }
}
