import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) {

  }

  getCatByCode(code: string){
    return this.httpClient.get("https://api.thecatapi.com/v1/images/search");  //instead of previous api, which
    //depends on code id, ive decide just to give random cats info. cause of CORS policy
    //return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/"+code);
  }

}
