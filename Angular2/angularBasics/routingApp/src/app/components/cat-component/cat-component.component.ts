import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-component',
  templateUrl: './cat-component.component.html',
  styleUrls: ['./cat-component.component.css']
})
export class CatComponentComponent implements OnInit {

  catsArray = [200, 403, 404, 408, 503];

  constructor() { }

  ngOnInit(): void {
  }

}
