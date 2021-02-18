import { Component, OnInit } from '@angular/core';
import {CatService} from "../../services/cat.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-cat-component',
  templateUrl: './single-cat-component.component.html',
  styleUrls: ['./single-cat-component.component.css']
})
export class SingleCatComponentComponent implements OnInit {

  code: string = "0";
  cat: any;


  constructor(private catsService: CatService, private activateRoutes: ActivatedRoute) {
    this.code = activateRoutes.snapshot.params['code']; //get the code of the chosen cat from urls
    this.catsService.getCatByCode(this.code).subscribe( (catInfo: any) => {   //make request to cats api
      this.cat = catInfo[0];  //it always returns random img
    });
  }

  ngOnInit(): void {
  }

}
