import { Component , OnInit , Input , Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-stackcartitem',
  templateUrl: './stackcartitem.component.html',
  styleUrls: ['./stackcartitem.component.css']
})
export class StackcartitemComponent implements  OnInit{
  @Input('cartItem') cartItem:any;
  qty:number = 0;

  constructor(private cartService:CartService) {
    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  incrementQty(){
    this.qty+=1;
    this.cartService.modifyTotal({
      "totalAmount":(this.cartItem.price),
      "isIncrement":true,
    });
  }

  decrementQty(){
    if(this.qty>0){
      this.qty-=1;
      this.cartService.modifyTotal({
        "totalAmount":(this.cartItem.price),
        "isIncrement":false,
      });
    }
  
  }

}
