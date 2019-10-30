import {Stats} from "../monster/stats";

export class SkillConstraint {

    stat: Stats;
    value: Number;

    constructor(stat: Stats, value: Number) {
        this.stat = stat;
        this.value = value
    }

}