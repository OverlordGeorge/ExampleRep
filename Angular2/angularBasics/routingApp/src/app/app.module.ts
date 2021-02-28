import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";  //this is library for our routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { DogComponentComponent } from './components/dog-component/dog-component.component';
import { CatComponentComponent } from './components/cat-component/cat-component.component';
import { SingleCatComponentComponent } from './components/single-cat-component/single-cat-component.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponentComponent},
  { path: 'dog', component: DogComponentComponent},
  {path: 'cat', component: CatComponentComponent},
  {path: 'cats/:code', component: SingleCatComponentComponent}
]   //our routes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DogComponentComponent,
    CatComponentComponent,
    SingleCatComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //for Http requests
    RouterModule.forRoot(appRoutes)  //where we attach our routes to app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
