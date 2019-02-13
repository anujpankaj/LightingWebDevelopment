import { LightningElement, api, track } from 'lwc';

export default class Lightningbutton extends LightningElement {
    @track innerLabel;
    @api
    get ariaLabel(){
        return this.innerLabel;
    }
    set ariaLabel(newValue){
        this.innerLabel = newValue;
    }
    @track pressed;
    @api
    get ariaPressed(){
        return this.pressed;        
    }
    set ariaPressed(newValue){
        this.pressed = newValue;
    }
    login(){
        
    }
}