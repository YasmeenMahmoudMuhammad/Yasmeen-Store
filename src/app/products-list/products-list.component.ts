import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {ProductsService} from '../products.service';
import { NotificationService } from '../services/notification.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
@Input() cards: any[]= [];
index: number =0 ;
isAdded : Boolean = false;

  constructor(private productsService:ProductsService,
    private notificationService: NotificationService,
    ) {
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
  
  increaseCount(product: any) {
   product.quantity  += 1;
    return product;

  }

  decreaseCount(product: any) {
    if(product.quantity >= 2){
      product.quantity -= 1;
    }
    return product;
  }

  showItem(product: any){
    this.productsService.showMoreDetails(product);
  }


  ngOnInit(): void {
  this.productsService.getProducts().subscribe((any) => {
    this.cards = any;
  });

}  
}
