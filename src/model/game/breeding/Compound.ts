import {Identifiable} from "../../Identifiable";

export class Compound{

    ref: number;
    type: string;
    bonusRequirements: number;


    constructor(content: Identifiable, bonusRequirements: number = 0){
        this.ref = content.id;
        this.type = content.constructor.name;
        this.bonusRequirements = bonusRequirements
    }
}
