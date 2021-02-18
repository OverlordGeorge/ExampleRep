import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../app.component";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    @Input() blogInfo: Blog;

  constructor() { }

  ngOnInit(): void {
  }

}
