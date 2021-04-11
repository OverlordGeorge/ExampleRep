import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userName: string
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onChangeName = new EventEmitter<string>();

  constructor() { }

  hit(value: boolean){
    this.onChanged.emit(value);
  }

  saveName(){
    this.onChangeName.emit(this.userName);
  }


  ngOnInit(): void {
  }

}
