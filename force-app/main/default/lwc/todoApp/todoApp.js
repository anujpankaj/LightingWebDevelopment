import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track items = [{id :1, name:'Table'},
                    {id:2, name:'Chair'},
                    {id:3, name:'TV'},
                    {id:4,name:'Bottle'}];
    @track changeItem = "Milk";
    updateItemName(){
        this.changeItem = "Update item name in todoapp";
    }
}