import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // slides = [
  //   { img: 'https://via.placeholder.com/600.png/09f/fff' },
  //   { img: 'https://via.placeholder.com/600.png/021/fff' },
  //   { img: 'https://via.placeholder.com/600.png/321/fff' },
  //   { img: 'https://via.placeholder.com/600.png/422/fff' },
  //   { img: 'https://via.placeholder.com/600.png/654/fff' },
  // ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 1 };
  @Input() cards: any[]= [];

  constructor(private productsService:ProductsService,) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((any) => {
      this.cards = any;
    });
  }


}
