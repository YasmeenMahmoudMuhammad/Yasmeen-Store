import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'productsList' , component: ProductsListComponent},
  {path: 'productDetails', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent },
  {path: 'check-out', component: CheckOutComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
