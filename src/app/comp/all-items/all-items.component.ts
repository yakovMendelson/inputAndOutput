import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  clickDetailsItems: persons;

  constructor() { }
  ngOnInit(): void {
  }

  deliteById(id){
    let index = this.allPersons.findIndex(_p => _p.id == id)
    this.allPersons.splice(index, 1);
  };
  addPerson(per){
    this.allPersons.push(per);
  }

  

  allPersons:persons[] = [
    { id:1, name:'shlomo', height:5.55, color:'blue', successful:false },
    { id:2, name:'iosy', height:15.55, color:'red', successful:true },
    { id:3, name:'beny', height:53.55, color:'brown', successful:false },
    { id:4, name:'asher', height:5.55, color:'violet', successful:false },
    { id:5, name:'david', height:9.6, color:'rgb(160,150,160)', successful:false },
    { id:6, name:'yeuda', height:7.4, color:'rgb(200,150,160)', successful:true },
    { id:7, name:'muli', height:3.2, color:'rgb(250,250,160)', successful:false },
    { id:8, name:'tortya', height:12.2, color:'gold', successful:true },
    { id:9, name:'molina', height:6.9, color:'tomato', successful:false },
    { id:10, name:'barvazon', height:7.8, color:'darkviolet', successful:false },
    { id:11, name:'moolyer', height:8.9, color:'indigo', successful:false },
  ]
}

export class persons{
  id:number
  name:string
  height:number
  color:string
  successful:boolean
}
