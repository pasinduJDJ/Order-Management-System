import { Component , OnInit , Input , Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-stackcartitem',
  templateUrl: './stackcartitem.component.html',
  styleUrls: ['./stackcartitem.component.css']
})
export class StackcartitemComponent implements  OnInit{
  @Input('cartItem') cartItem:any;


  constructor(private cartService:CartService) {
    
  }
  ngOnInit(): void {
  
  }

  toggleQty(isIncrement:boolean){
    this.cartService.toggleQty(this.cartItem.id ,isIncrement );
  }



 

}
