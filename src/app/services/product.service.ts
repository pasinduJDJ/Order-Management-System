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
  selectedProduct:EventEmitter<Product> = new EventEmitter();
  refreshTable:EventEmitter<boolean> = new EventEmitter();

  async getProducts():Promise<Observable<Product[]>>{
     this.httpClient.get<Product[]>('http://localhost:8080/products').subscribe(data=>{
      this.products.emit(data);
    })
    
    return this.products;
  }

  setSelectedProduct(selectedProduct:Product){
    this.selectedProduct.emit(selectedProduct);
  }



  async addProduct(product:Product){
    this.httpClient.post('http://localhost:8080/products',{
      "productName": product.productName,
      "productPrice": product.productPrice,
      "productDetails": product.productDetails,
      "productImageURL": product.productImageURL,
      }).subscribe(data=>{
       this.refreshTable.emit(true);
      });
  }

  url:string="http://localhost:8080/products";
  async deleteProduct(id:number){
    const url=this.url+"/"+id;
    return await this.httpClient.delete<Product>(url).subscribe(data=>{console.log(data);});
  }


  async updateProduct(product:any){
  
     return  await this.httpClient.put<Product>(this.url,product).subscribe(data=>{
      this.selectedProduct.emit(undefined);
      this.refreshTable.emit(true);
    });

  }
  
}
