import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class OpenFileSample extends NavigationMixin(LightningElement) {
    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type: "standard__namedPage",
            attribute: {
                pageName: 'filePreview'
            },
            state: {
                recordIds: '069O00000010jhdIAA',
                selectedRecordId: '069O00000010jhdIAA'
            }
        });
    }
}