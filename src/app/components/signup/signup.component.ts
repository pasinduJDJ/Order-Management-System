import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
   
  }


  constructor(private ngbActiveModal:NgbActiveModal) {
    
  }

  close(){
    this.ngbActiveModal.close();
  }

}