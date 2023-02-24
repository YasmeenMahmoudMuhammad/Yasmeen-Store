import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ProductsService} from '../products.service'
import { elements } from '../model/Produtc';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public products: elements[] = [];
  @Output() totalAmount = new EventEmitter();
  isAdded : Boolean = false;

  constructor(private productsService : ProductsService,
    private notificationService: NotificationService,
    ) {
    this.products = this.productsService.currentProduct;
  }
  increaseCount(product: any) {
    product.quantity  += 1;
    this.totalAmount.emit(product);
     return product;
   }
 
   decreaseCount(product: any) {
    if(product.quantity >= 2){
      product.quantity -= 1;
    }
     this.totalAmount.emit(product);
     return product;
   }

   addItem(product: any){
    this.isAdded= false;
    this.productsService.cartList.forEach((item) => {
      if (item.id == product.id) {
        item.quantity += product.quantity;
        this.isAdded = true;
        console.log('icrease count')

      }
    });

    if(this.isAdded == false){
    this.productsService.addToCArt(product);
    console.log('product is added')

  }
  this.notificationService.success('Add to cart succesfully')
}
  
  ngOnInit(): void {

  }

}
