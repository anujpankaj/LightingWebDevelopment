import { LightningElement, wire, track, api } from 'lwc';
import getContactListMethod from '@salesforce/apex/ContactControllerCls.getContactList';


export default class EventWithData extends LightningElement {
 @track selectedContact;
 @api flexipageRegionWidth;
 @wire(getContactListMethod) contacts; 
 
  contactSelected(event){
      const contactId = event.detail;
      this.selectedContact = this.contacts.data.find(contact  => contact.Id === contactId);      
  }
  get listIsNotEmpty(){
      return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length >0;
  }
}