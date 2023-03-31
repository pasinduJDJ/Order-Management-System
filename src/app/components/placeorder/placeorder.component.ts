import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  placeOrderForm: FormGroup = new FormGroup({});
  @Input('cartItems') cartItems?: any[];
  constructor(
    private activeModal: NgbActiveModal,
    private modal: NgbModal,
    private orderService:OrderService,
    private cartService: CartService,
    private fb: FormBuilder
  ) { }
  async ngOnInit() {
    this.placeOrderForm = this.fb.group({
      customerName: new FormControl('', [Validators.required]),
      customerAddress: new FormControl('', [Validators.required]),
      customerContactNo: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(11)]),
      productName: new FormControl('', [Validators.required]),
      totalPrice: new FormControl('', [Validators.required]),
    });



    let user = JSON.parse(localStorage.getItem('user')!.toString());
    this.placeOrderForm.controls['customerName'].setValue(user.fullName);
    this.placeOrderForm.controls['customerContactNo'].setValue(user.contactNo);
    this.placeOrderForm.controls['totalPrice'].setValue(this.cartService.totalPrice);
    this.setProductString();



    console.log(this.placeOrderForm.getRawValue());

  }


  closeModal() {
    this.activeModal.close();
  }

  setProductString(): void {
    let productString = "";
    this.cartItems!.forEach(e => {
      productString += e.productName + " - " + e.boughtQty+"\n";
    })
    this.placeOrderForm.controls['productName'].setValue(productString);
  }



  async placeOrder() {
    debugger;
    if (this.placeOrderForm?.invalid) {
      alert("Form is invalid")
    } else {
      debugger;
      await this.orderService.addOrder(this.placeOrderForm?.getRawValue()).then(result => {
        this.placeOrderForm?.reset();
        this.cartService.clear();
      })
    }
  }
}
