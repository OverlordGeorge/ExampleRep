import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  hits: number = 0;
  name: string = "Jack Smith";

  constructor() { }

  receiveHit(hit: boolean) {
    if (hit === true){
      this.hits++;
    } else{
      this.hits--;
    }
    //also like
    //hit === true ? this.hits++ : this.hits--;
    //or like
    //hit ? this.hits++ : this.hits--;
  }

  receiveName(name: string) {
    this.name = name;
  }

  ngOnInit(): void {
  }

}
