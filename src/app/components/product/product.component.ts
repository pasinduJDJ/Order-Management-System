import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  async ngOnInit() {
    await this.loadProducts(); 
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

  async deleteProduct(product:Product){
    debugger;
     await this.productService.deleteProduct(product.id)
  }

}
