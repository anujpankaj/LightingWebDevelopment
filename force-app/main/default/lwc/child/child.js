import { LightningElement, api, track } from 'lwc';

export default class Child extends LightningElement {
   
    @track itemNameUpper;
    @track 
    newItemName='milk';
    set itemName (value){
        this.itemNameUpper= value.toUpperCase();
    }
    @api
    get itemName(){
        return this.itemNameUpper;
    }
    handleClick(){
        this.newItemName ='bread';
       // console.log('newItemName is ' + this.newItemName);
    }
}