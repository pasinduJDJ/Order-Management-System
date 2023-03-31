import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addProductForm?:FormGroup<any>;
  selectedProduct?:Product;
  constructor(private productService:ProductService, private  fb:FormBuilder) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      id:new FormControl(''),
      productName:new FormControl('',[Validators.required]),
      productPrice:new FormControl('',Validators.required),
      productImageURL:new FormControl(''),
      productDetails:new FormControl('',Validators.required),
    });
    this.productService.selectedProduct.subscribe(product => {
      this.selectedProduct = product;
      this.addProductForm!.controls['id'].setValue(product.id);
      this.addProductForm!.controls['productName'].setValue(product.productName);
      this.addProductForm!.controls['productPrice'].setValue(product.productPrice);
      this.addProductForm!.controls['productImageURL'].setValue(product.productImageURL);
      this.addProductForm!.controls['productDetails'].setValue(product.productDetails);
    })
  }

  async addProduct(){
   
      if(this.addProductForm?.invalid){
        alert("Please Check Form Again")
      }else{
        if(this.selectedProduct == null || this.selectedProduct == undefined){
          await this.productService.addProduct(this.addProductForm?.getRawValue()).then(result=>{
            this.addProductForm?.reset();
          });
        }else{
          await this.productService.updateProduct(this.addProductForm!.getRawValue()).then(result=>{
            this.addProductForm?.reset();
          });
        }
       
      }
    
    
  }

  
}




