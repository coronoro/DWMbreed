import {Identifiable} from "../Identifiable";

export class TreeNode<T> extends Identifiable{

    value: T
    left: TreeNode<T>[]
    right: TreeNode<T>[]

    constructor(value:T) {
        super()
        this.value = value;
        this.left = [];
        this.right= []
    }
}