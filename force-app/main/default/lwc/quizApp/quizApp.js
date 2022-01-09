import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {};
    get allNotSelected(){
        //Object.key--> returns all keys in array
        return !(Object.keys(this.selected).length=== this.myQuestions.length)
    }
    isSubmit=false;
    correctAnswers=0;

    get isScoredFull(){
        if(this.myQuestions.length === this.correctAnswers){
            return 'slds-text-heading_large slds-text-color_success';
        }else{
            return 'slds-text-heading_large slds-text-color_error';
        }
    }

    myQuestions= [
        {
            id:'question1',
            question:'which one of the following is not a template loop',
            answer:{
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer:'c'
        },
        {
            id:'question2',
            question:'which of the file is invalid in LWC compoennt folder',
            answer:{
                a:'svg',
                b:'apex',
                c:'js'
            },
            correctAnswer:'b'
        },
        {
            id:'question3',
            question:'which of the following is not directive',
            answer:{
                a:'for:each',
                b:'iterator',
                c:'map loop'
            },
            correctAnswer:'c'
        }
    ]

    changeHandler(event){
        const {name,value}= event.target;//shorthand notation
        console.log(name);
        console.log(value);

        this.selected={...this.selected, [name]:value} 
        //this.selected ={"question1":"a"}

    }

    submitHandler(event){
        //default behavior like- refreshing of page won't happen.
        event.preventDefault();
        let correctAns = this.myQuestions.filter(item=>{
            return item.correctAnswer===this.selected[item.id];
        });
        this.correctAnswers=correctAns.length;
        this.isSubmit =true;

    }

    resetHandler(){
        this.isSubmit =false;
        this.correctAnswers=0;
        this.selected={};
    }

}