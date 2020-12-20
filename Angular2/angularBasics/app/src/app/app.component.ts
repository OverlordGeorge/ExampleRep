import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  show = true;
  name;
  pizzas = [
      {name: "cheese",
          price: 15,
          likes: 43
      },
      {name: "meat",
          price: 25,
          likes: 53
      },
      {name: "veggie",
          price: 10,
          likes: 20
      }
  ];
  cart=[];
sum=0;

  changeShow(){
    this.show= !this.show
  }
 addLike(pizza){
    pizza.likes++
 }

 addToCart(pizza){
    this.cart.push(pizza);
    this.sum+= pizza.price
 }

}
