import { LightningElement, api, track } from 'lwc';

export default class MyComponent extends LightningElement {
    @track firstname='';
    @track lastname='';
    @track privateTitle;
    @api 
    get title(){
        return this.privateTitle;
    }
    set title(value){
        this.privateTitle = value.toUpperCase();
        this.setAttribute('title', this.privateTitle);
    }
    handleChange(event){
        const field = event.target.name;
        if(field === 'firstname'){
           this.firstname = event.target.value;
        }else if(field === 'lastname'){
           this.lastname = event.target.value;     
        }
    }
    get uppercasedFullName(){
        return `${this.firstname} ${this.lastname}`.toUpperCase();
    }
}