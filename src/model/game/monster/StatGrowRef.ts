import {Stats} from "./Stats";

export class StatGrowRef {

    stat: Stats;
    growthRef: number

    constructor(stat: Stats,growthRef: number){
        this.stat = stat
        this.growthRef = growthRef
    }
}