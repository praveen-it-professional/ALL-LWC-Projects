import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';
export default class MemoryGameLWC extends LightningElement {

    isLibLoaded
    renderedCallback(){
        //we are loading file in renderedCallback because whenever HTML file completes render,
        //then only I want to load CSS
        //load style is promise call
        loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(function(){
            console.log("loaded successfully!!!!");
        }).catch(error=>{
            console.log(error);
        });
    }

}