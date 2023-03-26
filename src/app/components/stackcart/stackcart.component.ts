import { Component, OnInit , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stackcart',
  templateUrl: './stackcart.component.html',
  styleUrls: ['./stackcart.component.css']
})
export class StackcartComponent implements OnInit {
  cartItems:any = [];
  cartTotal:number = 2830;
  ngOnInit(): void {
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

  loadTotalAmount(totalObject:any){
    let isIncrement = totalObject.isIncrement;
    let totalPrice = totalObject.totalAmount;
    debugger;
    if(isIncrement){
      this.cartTotal += totalPrice;
    }else{
      this.cartTotal -= totalPrice;
    }
  }
}
