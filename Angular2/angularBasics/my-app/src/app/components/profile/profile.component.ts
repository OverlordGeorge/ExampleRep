import { Component, OnInit, Input } from '@angular/core';
import {Profile} from "../../app.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profileInfo: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
