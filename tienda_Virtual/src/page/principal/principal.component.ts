import { Component } from '@angular/core';
import { Icart } from 'src/app/interfaces/cart.interface';
import { Iproduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  products: Iproduct[] = [];
  cart: Icart[] = [];
  show?: boolean;


  constructor () {
    localStorage.setItem('cart', JSON.stringify([]));
    this.show = false;
  }

  ngOnInit() {
    this.products = [
      {id:1, name: 'Audifonos', descripcion: 'Audifonos con bluethooth', price: 10000, img: ''},
      {id:2, name: 'Pulsera Magnetica', descripcion: 'pulsera con magnetismo, donde se puede dejar diferentes objetos ',price: 9000, img: ''},
      {id:3, name: 'Lavamanos', descripcion: 'Lavamanos de alta resistencia',price: 23000, img: ''},
      {id:4, name: 'Ps5', descripcion: 'ojalá tenerla',price: 1000000, img: ''},
      {id:2, name: 'Lana', descripcion: 'lana de alta calidad ',price: 11000, img: ''},
    ];
  }

  toogleCart() {
    this.show = !this.show;
  }

}