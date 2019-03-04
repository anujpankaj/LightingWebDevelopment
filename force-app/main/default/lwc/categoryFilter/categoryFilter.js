import { LightningElement } from 'lwc';

export default class CategoryFilter extends LightningElement {
    handleCheckboxChange(){
        const filters = Array.from(
            this.template.querySelectorAll('lightning-input'),
        )
        .filter(element => element.checked)
        .map(element => element.label);
        const filterChangeEvent = new CustomEvent('filterchange', {
            detail: { filters }
        });
        //Fire the custom event
        this.dispatchEvent(filterChangeEvent);

    }
}