import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persons } from '../all-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  constructor() { }

  @Input() person : persons;

  @Output() del : EventEmitter<number>=new EventEmitter<number>();
  @Output() details : EventEmitter<persons>=new EventEmitter<persons>();

  ngOnInit(): void {
  }

  
   


  clickDetailsIt(){ 
    this.details.emit(this.person)
  }
  public myFuncDelite() {
    if(confirm('Are sure you want to delete this item ?'))
    this.del.emit(this.person.id)
  }

}
