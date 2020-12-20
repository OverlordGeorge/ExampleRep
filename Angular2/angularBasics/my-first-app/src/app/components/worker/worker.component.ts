import { Component, OnInit, Input } from '@angular/core';
import {Worker} from "../../app.component";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  id: number = Math.round(Math.random()*1000);
  @Input() workerData: Worker;  //property that will receive value from outside of component

  constructor() {}

  showSalary(){
    if (this.workerData.salary){
      alert(this.workerData.salary + "$");
    } else{
      alert("No data provided");
    }
  }

  ngOnInit(): void {
  }

}
