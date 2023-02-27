import { Component, OnInit} from '@angular/core';
import { elements } from '../model/Produtc';
import {ProductsService} from '../products.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
removedItem :number =0;
quantity: number | undefined;
totalPrice: number = 0.0;
toggleEmptyCart :boolean =true;
public products: elements[] = [];

constructor(private productsService: ProductsService,
  private notificationService: NotificationService,) { 
}
// showEnptyCart(){
//   if(this.totalPrice == 0){
//     this.toggleEmptyCart =false;
//   }
// }
   calcTotalPrice() {
    this.products.forEach((cartItem) => {
      this.totalPrice += cartItem.quantity * cartItem.price;
    });
    

  }
  remove(id: number) {
    if (confirm("Are you sure to delete this item"))
    {
      this.productsService.deleteProduct(id);
      this.products = this.productsService.getCartProducts();
        this.products.forEach((cartItem) => {
          this.removedItem = this.totalPrice - cartItem.quantity *cartItem.price;
          this.totalPrice -= this.removedItem;
        });
        this.notificationService.success('Deleted succesfully');
        this.calcTotalPrice();

    }
  }

  orderQuantity(product: any) {
    this.products.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
      }
      return item.quantity
    });
  }

  ngOnInit(): void {
    this.products = this.productsService.cartList;
    this.calcTotalPrice();
    if(this.totalPrice == 0){
      this.toggleEmptyCart =!this.toggleEmptyCart;
    }
    
  }
}
