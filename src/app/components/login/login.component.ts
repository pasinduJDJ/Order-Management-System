import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal , NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ngOnInit(): void {
  } 

  constructor(
      private activeModal:NgbActiveModal,
      private modal:NgbModal,
      private userSerivce:UserService,
      private router:Router
  ) {}

  closeModal(){
    this.activeModal.close();
  }

  openSignupModal(){
    this.closeModal();
    this.modal.open(SignupComponent);
  }

  async login(event:any){
    let userName = event.target.username.value;
    let password = event.target.password.value;
    if(userName==null || userName==""){
      alert("Please Enter user name ");
    }
    else if(password==null || password==""){
      alert("Please Enter password");
    }
    else{
      let myUsers;
      await this.userSerivce.getUsers().then(users=>{
        let subscription = users.subscribe(users=>{
          myUsers= users.filter(user=>(user.userName==userName) && (user.password==password))
      
          if(myUsers.length > 0){
            let myUser = myUsers[0];
            myUser.password = "";
            this.userSerivce.isAdmin.emit(new String(myUser.userName).toLocaleLowerCase().trim() == "admin");
            this.userSerivce.isLoggedIn.emit(true);
            localStorage.setItem('user', JSON.stringify(myUser));
            this.closeModal();
            this.router.navigate(['/app/home']);
            subscription.unsubscribe();
          }else{
            alert("User not found")
            subscription.unsubscribe();
          }
        }); 
      })
    }
  }


}
