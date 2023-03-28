import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit  {


  constructor(private cartService:CartService) {
    
  }

  ngOnInit(): void {
    
  }
  @Input('product') product:any;


  async onCheckout() {
    await this.cartService.addToCart(this.product);
  }

}
