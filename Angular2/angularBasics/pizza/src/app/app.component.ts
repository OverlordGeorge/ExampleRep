import {Component} from '@angular/core';

export interface Product {
    name: string,
    price: number,
    sold: boolean
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pizza';
    products: Product[] = [
        {
            name: "pizza",
            price: 12,
            sold: true
        }, {
            name: "pie",
            price: 9,
            sold: true
        },
        {
            name: "soda",
            price: 2,
            sold: false
        }
    ];
    filteredProducts: Product[]=this.products;
    searchName= "";
    filterSearch(searchName: string){
       this.filteredProducts= this.products.filter( product => product.name.includes(searchName))
    }
}



