import { LightningElement, api, track } from 'lwc';

export default class FetchDetail extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track fields=['Name', 'Title', 'Phone', 'Email'];
}