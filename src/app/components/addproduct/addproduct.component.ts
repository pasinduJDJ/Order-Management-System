import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  addProductForm?:FormGroup<any>;
  
  constructor(private productService:ProductService, private  fb:FormBuilder) {}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productname:new FormControl('',[Validators.required]),
      productprice:new FormControl('',Validators.required),
      productimage:new FormControl(),
      productdetails:new FormControl('',Validators.required),
    });
  }

  async addProduct(){
    debugger;
    if(this.addProductForm?.invalid){
      alert("Please Check Form Again")
    }else{
      debugger;
      await this.productService.addProduct(this.addProductForm?.getRawValue()).then(result=>{
        this.addProductForm?.reset();
      })
    }
  }
}

