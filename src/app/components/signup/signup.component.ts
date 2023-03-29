import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm?:FormGroup<any>;

  constructor(private ngbActiveModal:NgbActiveModal, private  fb:FormBuilder, private userService:UserService) {
    
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName:new FormControl('',[Validators.required]),
      nic:new FormControl('',Validators.required),
      contactNo:new FormControl('',[Validators.required,Validators.maxLength(11)]),
      userName:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      conpwd:new FormControl('',Validators.required),
    });
  }
  close(){
    this.ngbActiveModal.close();
  }

  async onSignup(){
    if(this.signUpForm?.invalid){
      alert("Form is invalid")
    }else if(new String(this.signUpForm?.controls['userName'].value).toLowerCase() == "admin"){
      alert("Username should not called admin")
    }else{
      if(this.MatchPassword("password","conpwd")){
        await this.userService.addUser(this.signUpForm?.getRawValue()).then(result=>{
          this.signUpForm?.reset();
        })
      }else{
        alert("passwords should be matched");
      }
    }
  }

  MatchPassword(password: string, confirmPassword: string):boolean {
   
      const passwordControl = this.signUpForm!.controls[password];
      const confirmPasswordControl = this.signUpForm!.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return false;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
        return false;
        
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } 
      else {
        confirmPasswordControl.setErrors(null);
        return true;
      }

      return false;
    
  }

}