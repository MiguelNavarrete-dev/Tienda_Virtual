import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'src/page/carousel/carousel.component';
import { CartComponent } from 'src/page/cart/cart.component';
import { FooterComponent } from 'src/page/footer/footer.component';
import { NavbarComponent } from 'src/page/navbar/navbar.component';
import { PrincipalComponent } from 'src/page/principal/principal.component';
import { ProductComponent } from 'src/page/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'carousel',
    component: CarouselComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'carro',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
