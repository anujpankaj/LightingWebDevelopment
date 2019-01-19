import { LightningElement, api } from 'lwc';

export default class Boole extends LightningElement {
    //Always set the default value for a boolean to false
    @api show = false;
}