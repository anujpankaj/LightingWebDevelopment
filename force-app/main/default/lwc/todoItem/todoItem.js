import { LightningElement, api } from 'lwc';

export default class TodoItem extends LightningElement {
    @api itemName;
    updateItemName(){
        this.itemName = "updated item name in todoitem";
    }
}