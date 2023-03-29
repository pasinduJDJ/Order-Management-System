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
    this.httpClient.post('http://localhost:8080/products',{
      "productName": product.productName,
      "productPrice": product.productPrice,
      "productDetails": product.productDetails,
      "productImageURL": product.productImageURL,
      "productStatus": product.productStatus,
      "productCategory": product.productCategory,
    }).subscribe(data=>{
      console.log(data);
     });
  }
}
