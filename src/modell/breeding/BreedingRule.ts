import {Identifiable} from '../identifiable'
import {Monster} from "../monster/monster";
import {Compound} from "./compound";

export class BreedingRule extends Identifiable{

    compound1: Compound;
    compound2: Compound;
    resultId: Number;

    constructor(compound1: Compound, compound2: Compound, result: Monster){
        super();
        this.compound1 = compound1;
        this.compound2 = compound2;
        this.resultId = result.id
    }

}
