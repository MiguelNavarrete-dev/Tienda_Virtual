import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//pagina de inicio
import { PrincipalComponent } from 'src/page/principal/principal.component';
import { NavbarComponent } from 'src/page/navbar/navbar.component';
import { CarouselComponent } from 'src/page/carousel/carousel.component';
import { FooterComponent } from 'src/page/footer/footer.component';
import { ProductComponent } from 'src/page/product/product.component';
import { CartComponent } from 'src/page/cart/cart.component';


@NgModule({
  declarations: [AppComponent,
    PrincipalComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
