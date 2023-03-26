import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-stackcart',
  templateUrl: './stackcart.component.html',
  styleUrls: ['./stackcart.component.css']
})
export class StackcartComponent implements OnInit {

  constructor(private cartService:CartService) {
    
  }
  cartItems:any = [];
  cartTotal:number = 2830;
  totalObject:any = {};

  ngOnInit(): void {
    this.cartService.totalAmount.subscribe(e=>{
      this.totalObject = e;
      this.loadTotalAmount();
    });


    this.cartItems = [

  {
    id:3,
    name:"Pazta",
    price:1850
  },
  {
    id:4,
    name:"Biriyani",
    price:980,
  },


    ];
  }

  showSlider:boolean = true;
  @Output('isSliderShow') isSliderShow:EventEmitter<boolean> = new EventEmitter<boolean>();


  closeSlider(){
    this.showSlider = !this.showSlider;
    this.isSliderShow.emit(this.showSlider);
  }

  loadTotalAmount(){
  
    let isIncrement = this.totalObject.isIncrement;
    let totalPrice = this.totalObject.totalAmount;
    if(isIncrement){
      this.cartTotal += totalPrice;
    }else{
      this.cartTotal -= totalPrice;
    }
  }
}
