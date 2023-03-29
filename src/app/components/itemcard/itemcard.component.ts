import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit  {
[x: string]: any;


  constructor(private cartService:CartService) {
    
  }

  ngOnInit(): void {
    this.product.boughtQty = 0;
  }
  @Input('product') product:any;


  async onCheckout() {
    await this.cartService.addToCart(this.product);
  }

}
