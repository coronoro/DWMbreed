import {Identifiable} from "./identifiable";

export class Family extends Identifiable{

    name:String

    constructor(name:String){
        super();
        this.name = name
    }

}