import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders:Order[] = [];
  async ngOnInit() {
    await this.loadOrders(); 
  }

  constructor(private orderService:OrderService) {}
   async loadOrders(){
     this.orderService.getOrders().then(orders=>{
      orders.subscribe(orders=>{
        this.orders = orders;
      })
    })
  }

  submitOrderForm(){
   
  }


  deleteOrder(){

  }
}
