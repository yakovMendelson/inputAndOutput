import { Component, OnInit, Input } from '@angular/core';
import { persons } from '../all-items.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() perDetails:persons;
  constructor() { }

  ngOnInit(): void {
  }

}
