import { Component } from '@angular/core';
import { Icart } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cart?: Icart[] = [];

    ngOnInit(): void{
        const cartFromStorage = localStorage.getItem('cart');
        if (cartFromStorage !== null) {
          this.cart = JSON.parse(cartFromStorage);
        } else {
          this.cart = [];
        }
    }
}