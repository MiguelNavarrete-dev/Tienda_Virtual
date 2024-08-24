import { Component, Input } from '@angular/core';
import { Iproduct,Icart} from 'src/app/interfaces/interfaces';



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
   
  @Input() product?: Iproduct;
  cart?: Icart[] = [];

  ngOnInit():void{
    console.log(this.product);
  }

  add(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cart?.push({ IdProduct: this.product?.id || 0, name: this.product?.name || '' , price: this.product?.price || 0,quantity: 1,   productImage: this.product?.img || ''});
      localStorage.setItem('cart', JSON.stringify(this.cart));
    } else {
      this.cart = [{ IdProduct: this.product?.id || 0, name: this.product?.name || '' , price: this.product?.price || 0,quantity: 1,   productImage: this.product?.img || ''}];
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
  
}


