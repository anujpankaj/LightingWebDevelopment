import { LightningElement } from 'lwc';
import axisbankimage from '@salesforce/resourceUrl/axis';
import firstLabel from '@salesforce/label/c.LWC';
import LANG from '@salesforce/i18n/lang';
import DIR from '@salesforce/i18n/dir';
import userId from '@salesforce/user/Id';

export default class Example extends LightningElement {
    axisbankimageurl=axisbankimage;
    label = {firstLabel};
    lang = LANG;
    dir = DIR;    
    userid = userId;
    renderedCallback(){
        debugger;       
        this.template.querySelector('div');
        this.template.querySelector('span');
        this.template.querySelectorAll('div');
    }
}