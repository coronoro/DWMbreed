import {Identifiable} from "../Identifiable";
import {SexProbability} from "./SexProbability";
import {Stats} from "./Stats";
import {StatGrowRef} from "./StatGrowRef";

export class Monster extends Identifiable{

    name: String;
    familyId: Number
    skills: Number[]
    maxLvl: Number;
    expTableId: Number
    sexProbability: SexProbability
    flying: Boolean
    metal: Boolean
    statGrow: StatGrowRef[]

    constructor(name:String, familyId:Number){
        super();
        this.name = name;
        this.familyId = familyId
}

}