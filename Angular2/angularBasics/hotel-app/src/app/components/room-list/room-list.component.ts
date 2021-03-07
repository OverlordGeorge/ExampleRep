import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

    rooms = [];

    constructor(private hotelService: HotelsService, private router: Router) {
        let num = this.router.url.indexOf("/", 5);
        let hotelName = this.router.url.slice(num + 1);

        console.log(hotelName);

        this.hotelService.getRoomsByHotel(hotelName).subscribe((rooms: any) => {
            this.rooms= rooms
        })
    }

    ngOnInit(): void {
    }

}
