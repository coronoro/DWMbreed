import {Identifiable} from '../../Identifiable'
import {Monster} from "../monster/Monster";
import {Compound} from "./Compound";

export class BreedingRule extends Identifiable{

    compound1: Compound;
    compound2: Compound;
    resultId: number;

    constructor(compound1: Compound, compound2: Compound, result: Monster){
        super();
        this.compound1 = compound1;
        this.compound2 = compound2;
        this.resultId = result.id
    }

}
