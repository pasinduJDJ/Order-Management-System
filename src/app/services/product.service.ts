import { HttpClient } from '@angular/common/http';
import { Injectable  , EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient:HttpClient) {}

  productList:Product[] =[];
  products:EventEmitter<Product[]>=new EventEmitter();

  async getProducts():Promise<Observable<Product[]>>{
     this.httpClient.get<Product[]>('http://localhost:8080/products').subscribe(data=>{
      this.products.emit(data);
    })
    
    return this.products;
  }

  async addProduct(product:Product){
    debugger;
    this.httpClient.post('http://localhost:8080/products',{
      "productName": product.productName,
      "productPrice": product.productPrice,
      "productDetails": product.productDetails,
      "productImageURL": product.productImageURL,
      }).subscribe(data=>{
        debugger;
        console.log(data);
      });
  }

  url:string="http://localhost:8080/products";
  deleteProduct(id:number){
    debugger;
    const url=`${this.url}/${id}}`;
    return this.httpClient.delete<Product>(url).subscribe(data=>{console.log(data);});
  }

  
}
