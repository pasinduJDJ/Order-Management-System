import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm?:FormGroup<any>;

  constructor(private ngbActiveModal:NgbActiveModal, private  fb:FormBuilder, private userService:UserService,private emailServices:EmailService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName:new FormControl('',[Validators.required]),
      nic:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(13)]),
      contactNo:new FormControl('',[Validators.required,Validators.minLength(9),Validators.maxLength(11)]),
      email:new FormControl('',[Validators.required]),
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
      alert("Please check form again")
    }else if(new String(this.signUpForm?.controls['userName'].value).toLowerCase() == "admin"){
      alert("Username should not called admin")
    }else{
      if(this.MatchPassword("password","conpwd")){
        debugger;
        await this.userService.addUser(this.signUpForm?.getRawValue()).then(result=>{
          this.signUpForm?.reset();
        })
        ////////////////////////////////////////////////////////////////////////////////////////////// Email send //////////////////
        // await this.emailServices.addEmail(this.signUpForm?.getRawValue()).then(result=>{
        //   this.signUpForm?.reset();
        // })
        //////////////////////////////////////////////////////////////////////////////////////// Email /////////////////////////
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