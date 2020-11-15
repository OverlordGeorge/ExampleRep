import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Brianna';

  clients = [
    {
      "name":"Sam",
      "price": 100
    },
    {
      "name": "Nick",
      "price": 250
    },
    {
      "name":"Martha",
      "price": 80
    }
  ]

  calcTheTax(client){
      alert(client.price * 0.1);
  }

  calcSum(){
    let sum = 0;
    this.clients.forEach( (client) => {
          sum+=client.price;
      })
    /*
        this.clients.forEach( function(client){
          sum+=client.price;
      })
     */

    /*
        for (let i=0;i<clients.length;i++){
            sum = sum + clients[i].client;
        }
     */
    return sum;
  }

  clickMe() {
    alert("func");
  }

}
