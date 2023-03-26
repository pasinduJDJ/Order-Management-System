import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems:EventEmitter<Object[]> = new EventEmitter();
  totalAmount:EventEmitter<Object> = new EventEmitter();

  modifyTotal(object:Object){
    this.totalAmount.emit(object);
  }

  addToCart(product:Object){
    
  }
}
