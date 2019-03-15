import { LightningElement, track } from 'lwc';

export default class TestDemo extends LightningElement {
  @track myName;

  connectedCallback(){
    this.myName = 'Amit Gayal';
  }

  changeMyName(){
      this.myName = "Kaizen";
  }
}