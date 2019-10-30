import {Identifiable} from "../Identifiable";
import {SexProbability} from "./SexProbability";
import {Stats} from "./Stats";
import {StatGrowRef} from "./StatGrowRef";

export class Monster extends Identifiable{

    name: string;
    familyId: number
    skills: number[]
    maxLvl: number;
    expTableId: number
    sexProbability: SexProbability
    flying: boolean
    metal: boolean
    statGrow: StatGrowRef[]

    constructor(name:string, familyId:number){
        super();
        this.name = name;
        this.familyId = familyId
}

}