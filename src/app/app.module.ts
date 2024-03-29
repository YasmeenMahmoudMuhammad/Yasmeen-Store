import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RiAncientGateFill,  RiHome2Fill, RemixIconModule} from 'angular-remix-icon';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NotFoundComponent } from './not-found/not-found.component';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
};
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckOutComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    RemixIconModule.configure(icons),
    SlickCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
