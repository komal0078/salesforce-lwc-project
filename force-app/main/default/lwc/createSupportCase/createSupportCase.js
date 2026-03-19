import { LightningElement } from 'lwc';
import createCase from '@salesforce/apex/SupportCaseController.createCase';

export default class CreateSupportCase extends LightningElement {

description='';
priority='';

priorityOptions = [
{ label: 'Critical', value: 'Critical' },
{ label: 'High', value: 'High' },
{ label: 'Medium', value: 'Medium' },
{ label: 'Low', value: 'Low' }
];

handleDescription(event){
this.description = event.target.value;
}

handlePriority(event){
this.priority = event.target.value;
}

createCase(){

createCase({
description:this.description,
priority:this.priority
});

}

}