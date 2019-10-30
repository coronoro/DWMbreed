import {Identifiable} from "../Identifiable";

export class GrowthTable extends Identifiable{

    table: number[][]

    constructor(dimension:[Number, Number]){
        super()
        this.table = []
        for(var i: number = 0; i < dimension[0]; i++) {
            this.table[i] = [];
            for(var j: number = 1; j< dimension[1]; j++) {
                this.table[i][j] = -1;
            }
        }

    }

}