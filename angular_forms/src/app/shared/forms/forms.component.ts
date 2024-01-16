import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent   {

  public name?:string;
  
  public edad?:number;

  @Input() apellido?:string;
  @Input() ocupacion?:string;


  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { 
    this.name='Luis';
    this.edad=29;
  }


  addNewItem(value:string){
    this.newItemEvent.emit(value)

  }

  

}
