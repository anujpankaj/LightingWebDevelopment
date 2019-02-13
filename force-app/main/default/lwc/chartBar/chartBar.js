import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api percentage;

    get htmlstyle(){        
        return `width :${this.percentage}%`;
    }
}