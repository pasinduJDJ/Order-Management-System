import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  placeOrderForm: FormGroup = new FormGroup({});
  cartProducts?: Product[];
  constructor(
    private activeModal: NgbActiveModal,
    private modal: NgbModal,
    private userService: UserService,
    private cartService: CartService,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.placeOrderForm = this.fb.group({
      customerName: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required]),
      customerContactNo: new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(11)]),
      productName: new FormControl('', [Validators.required]),
      totalPrice: new FormControl('', [Validators.required]),
    });

    this.cartService.cartItems.subscribe(data => {
      debugger;
      let productString = "";
      data.forEach(e => {
        productString += e.productName + " - " + e.boughtQuantity
      })
      this.placeOrderForm.controls['productName'].setValue(productString);
    });

    let user = JSON.parse(localStorage.getItem('user')!.toString());
    this.placeOrderForm.controls['customerName'].setValue(user.fullName);
    this.placeOrderForm.controls['customerContactNo'].setValue(user.contactNo);
    this.placeOrderForm.controls['totalPrice'].setValue(this.cartService.totalPrice);
   

    console.log(this.placeOrderForm.getRawValue());
    debugger;

  }


  closeModal() {
    this.activeModal.close();
  }

 

  async placeOrder() {
    debugger;
    if(this.placeOrderForm?.invalid){
      alert("Form is invalid")
    }else{
      debugger;
      await this.userService.addUser(this.placeOrderForm?.getRawValue()).then(result=>{
        this.placeOrderForm?.reset();
        debugger;
      })
    }
  }
}
