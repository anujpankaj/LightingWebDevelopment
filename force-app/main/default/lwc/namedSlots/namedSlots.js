import { LightningElement } from 'lwc';

export default class NamedSlots extends LightningElement {
    renderedCallback(){
        console.log('test '+this.querySelector('span'));
        console.log('test112'+ this.querySelectorAll('span'));
    }
}