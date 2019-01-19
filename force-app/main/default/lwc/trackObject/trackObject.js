import { LightningElement, track } from 'lwc';

export default class TrackObject extends LightningElement {
  @track xvar ={ a : "", b : ""};
  @track xdate;
   
    init(){
        this.xvar.a = "a";
        this.xvar.b = "b";
    }
    update(){
       this.xvar.a = "aa";
       this.xvar.b = "bb";
    }
    initDate(){
        this.xdate= new Date();
    }
    updateDate(){
        this.x.setHours(7);
    }
}