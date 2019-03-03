import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavTab extends NavigationMixin(LightningElement)  {
    @api tabName;
    @api label;
    navigateNext(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Test'
            }
        });
    }
}