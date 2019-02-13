import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import D3  from '@salesforce/resourceUrl/d3Lib';

export default class LibsD3 extends LightningElement {
    svgWidth = 400;
    svgHeight = 400;
    d3Initialized = false;

    renderedCallback(){
        if(this.d3Initialized){
            return;
        }
        this.d3Initialized = true;
        Promise.all([
            loadScript(this, D3 + '/d3.min.js'),
            loadStyle(this, D3 + '/style.css')
        ])
        .then(() =>{
            this.initializeD3();
        })
        .catch(error =>{
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading D3',
                        message: error.message,
                        variant: 'error'
                    })
                )
            })
    }
    initializeD3(){
      console.log(this.svgHeight);
    }
}