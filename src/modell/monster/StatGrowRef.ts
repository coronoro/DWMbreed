import {Stats} from "./Stats";

export class StatGrowRef {

    stat: Stats;
    growthRef: Number

    constructor(stat: Stats,growthRef: Number){
        this.stat = stat
        this.growthRef = growthRef
    }
}