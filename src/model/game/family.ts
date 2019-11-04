import {Identifiable} from "../Identifiable";

export class Family extends Identifiable{

    name:string;

    constructor(name:string){
        super();
        this.name = name
    }

}