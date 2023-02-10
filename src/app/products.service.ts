import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { elements } from './model/Produtc';
import { CartComponent } from './cart/cart.component';
import { Output, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currentProduct: elements[] = [];
  cartList: elements[] = [];

  constructor(private httpClient: HttpClient) {
   }

   showMoreDetails(product: any) {
    this.currentProduct = [product];
   }

  addToCArt(product: any){
    this.cartList.push(product);
  }
  @Output() hideItem: EventEmitter<CartComponent> = new EventEmitter;
  getCartProducts() {
    return this.cartList;
  }
  deleteProduct(id: number): void {
    let products = this.cartList.filter((p) => p.id !== id);
    this.cartList = products;
  }
getProducts(): Observable<elements[]> {
  return this.httpClient.get<elements[]>('../../assets/data.json')
}
}
