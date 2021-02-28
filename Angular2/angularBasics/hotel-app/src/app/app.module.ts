import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes= [
    { path: '', redirectTo: 'hotels', pathMatch: 'full'},
    {path: "hotels", component: HotelListComponent},
    {path: "hotels/:name", component: RoomListComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    RoomListComponent,
    RoomInfoComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
