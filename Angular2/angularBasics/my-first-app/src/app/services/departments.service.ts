import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  //this.http - http library which allows to do get/post requests
  constructor(private http: HttpClient) {

  }

  getDepartments(){
    // api/departments/get
    return this.http.get("assets/departments1.json"); //returns observable type, which is kind of connection
  }

  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
