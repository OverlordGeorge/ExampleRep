import { Component } from '@angular/core';

export interface Profile {
  name: string,
    username: string

}

export interface Blog {
    author: string,
    text: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
profileInfo: Profile= {
  name: "Brianna",
    username: "Bree09"
}
blogs: Blog[]= [
    {author: "healthBlog",
    text: "Food is Medicine"},
    {author: "politicPeople",
    text:"The new president is coming"}
]
}
