import { Component, OnInit } from '@angular/core';

import { NgbModal , NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
      private modal:NgbModal
  ) {}

  closeModal(){
    this.activeModal.close();
  }

  openSignupModal(){
    this.closeModal();
    this.modal.open(SignupComponent);
  }



}
