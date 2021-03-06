import {Component} from '@angular/core';
import {DepartmentsService} from "./services/departments.service";

export interface Department {
  name: string,
  workers: Array<Worker>
}

export interface Worker {
  name: string,
  position: string,
  age: number,
  salary?: number //optional param
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  departments: Array<Department> = [];

  constructor(private departmentsService: DepartmentsService) {
    this.departmentsService.getDepartments().subscribe( (data: Array<Department>) => { //when dta is received
      this.departments = data;  //save it into departments variable
    }, (err) => {   // there we catch error situation
      alert(err.message);
    });
  }

  /*departments: Array<Department> = [
    {
      name: "South department",
      workers: [
        {
          name: "Sam",
          position: "manager",
          age: 19
        },
        {
          name: "Nick",
          position: "driver",
          age: 41,
          salary: 1000
        },
        {
          name: "Ally",
          position: "medic",
          age: 28,
        }
      ]
    },
    {
      name: "North Department",
      workers: [{
        name: "Kris",
        position: "manager",
        age: 33,
      }]
    },
    {
      name: "Central Department",
      workers: [{
        name: "Alex",
        position: "manager",
        age: 34,
      }]
    }
  ]*/


}
