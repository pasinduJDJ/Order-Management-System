import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { PlaceorderComponent } from '../placeorder/placeorder.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-stackcart',
  templateUrl: './stackcart.component.html',
  styleUrls: ['./stackcart.component.css']
})
export class StackcartComponent implements OnInit {

  constructor(private cartService:CartService , private ngbModal:NgbModal,private userService:UserService) {
    
  }
  cartItems:any = [];
  cartTotal:number = 0;
  totalObject:any = {};
  isLoggedIn:boolean = false;

  async ngOnInit() {
    this.cartService.totalAmount.subscribe(e=>{
      this.totalObject = e;
      this.loadTotalAmount();
    });

    await this.cartService.cartItems.subscribe(cartItems=>{
      this.cartItems = cartItems;
    })

    await this.userService.isLoggedIn.subscribe(isLoggedIn=>{
      this.isLoggedIn = isLoggedIn;
    })
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

  checkOutOrder(){
    if(this.isLoggedIn){
      this.cartService.setTotalPrice(this.cartTotal);
      this.ngbModal.open(PlaceorderComponent);
    }else{
      this.ngbModal.open(LoginComponent);
    }
    
    
  }
}
