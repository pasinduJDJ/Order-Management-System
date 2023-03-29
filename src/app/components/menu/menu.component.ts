import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:Product[] = [];
  async ngOnInit(){
    await this.loadProducts();


    // this.products = [
    //   {
    //     id:1,
    //     name:"Burger",
    //     price:850,
    //     boughtQty:0,
    //   },
    //   {
    //     id:2,
    //     name:"Koththu",
    //     price:100,
    //     boughtQty:0,
    //   },
    //   {
    //     id:3,
    //     name:"Pazta",
    //     price:1850,
    //     boughtQty:0,
    //   },
    //   {
    //     id:4,
    //     name:"Biriyani",
    //     price:980,
    //     boughtQty:0,
    //   },
    // ];
  }

  constructor(private productService:ProductService) {
    
  }


   async loadProducts(){
     this.productService.getProducts().then(products=>{
      products.subscribe(products=>{
        this.products = products;
      })
    })
  }

}
