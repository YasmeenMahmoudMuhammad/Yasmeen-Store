import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { elements } from '../model/Produtc';
import {ProductsService} from '../products.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
totalPrice: number = 0.0;
removedItem :number =0;
quantity: number | undefined;
cardNumberPattern: string = '^[0-9]*$';
fullName: string | undefined;
address: string | undefined;
creditCard: number | undefined;
public products: elements[] = [];

constructor(private productsService: ProductsService,
  private notificationService: NotificationService,
  private Router: Router) { 
}

  onSubmit(): void {
    this.Router.navigate(['/confirmation', this.fullName, this.totalPrice]);
   }

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

  }

}
