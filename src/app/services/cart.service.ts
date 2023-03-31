import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems:EventEmitter<any[]> = new EventEmitter();
  totalAmount:EventEmitter<Object> = new EventEmitter();
  totalPrice:number = 0
  cartTotal:EventEmitter<number> = new EventEmitter();


   productList:any[] = [];

   


  setTotalPrice(total:number){
    this.totalPrice = total;
    this.cartTotal.emit(total);
  }

  async getCartItems(){
    let items: any[] = [];
    debugger;
    await this.cartItems.subscribe(cartItems=>{
      
            items= cartItems;
      })
    return items;
  }
  modifyTotal(object:Object){
    this.totalAmount.emit(object);
  }

    addToCart(product:any){
      if(this.productList.filter(prod=>prod.id == product.id).length>0){
          this.toggleQty(product.id , true);
      }else{
        this.modifyTotal({
          "totalAmount":product.productPrice,
          "isIncrement":true,
        });
        product.boughtQty+=1;
        this.productList.push(product);
        this.cartItems.emit(this.productList);
      }
      
  }

  toggleQty(productId :number , isIncrement :boolean){
    let productItem = this.productList.filter(prod=>prod.id == productId)[0];
    let index = this.productList.findIndex(prod=>prod.id == productId);

    if(productItem.boughtQty ==0){
        this.productList.splice(index,1);
    }else{
      if(isIncrement){
        productItem.boughtQty+=1;
      }else{
        if(productItem.boughtQty>=1){
          productItem.boughtQty-=1;
        }
      }
  
      this.modifyTotal({
        "totalAmount":productItem.productPrice,
        "isIncrement":isIncrement,
      });
      this.productList[index] = productItem; 
    }
    
    this.cartItems.emit(this.productList);
  }

  clear(){
    this.cartItems.emit([]);
    this.cartTotal.emit(0);
  }
}
