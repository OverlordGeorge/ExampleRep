import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelsService {



  constructor(private httpClient: HttpClient) { }

  getRoomsByHotel(hotel: string){
    return this.httpClient.get("http://roomsmontreal.com:3003/rooms/get?hotel="+ hotel)
  }

}
