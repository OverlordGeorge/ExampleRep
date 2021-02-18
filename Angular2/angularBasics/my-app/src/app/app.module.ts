import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
