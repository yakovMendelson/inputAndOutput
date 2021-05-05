import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ServiesService } from 'src/app/servies.service';
import { persons } from '../all-items.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @ViewChild('winForm')winForm:ElementRef;
  @ViewChild('add')add:ElementRef;
  person :persons;
  
  @Output() personAdd :EventEmitter<persons> = new EventEmitter<persons>()
  constructor(private  http:ServiesService) { }

  ngOnInit(): void {
    // this.http.post()
  }
  addPerson(){
  this.add.nativeElement.style.display='none'
  this.winForm.nativeElement.style.display='grid'
 }
 finished(name,height,successful,id){
  if(confirm('Are sure you want to add this item ?')){
  let color='#'+Math.random().toString(16).substr(-6);
   this.person=new persons;
   this.person.id=id.value;
   this.person.name=name.value;
   this.person.height=height.value;
   this.person.successful=successful.value;
   this.person.color=color;
   this.personAdd.emit(this.person);
  }

      this.add.nativeElement.style.display='grid'
      this.winForm.nativeElement.style.display='none'
      name.value='';
      height.value='';
      successful.value='';
      id.value='';
 }

}
