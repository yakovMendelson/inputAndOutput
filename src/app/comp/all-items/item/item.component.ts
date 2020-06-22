import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { persons } from '../all-items.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  message:string='hhhhhhhh'
  constructor() { }

  @Input() person : persons;

  @Output() del : EventEmitter<number>=new EventEmitter<number>();
  @Output() details : EventEmitter<persons>=new EventEmitter<persons>();

  ngOnInit(): void {
  }

  delite(){
    this.del.emit(this.person.id)
  }

  clickDetailsIt(){ 
    this.details.emit(this.person)
  }
  public myFunc() {
    if(window.confirm('Are sure you want to delete this item ?'))
    this.delite()
  }

}
