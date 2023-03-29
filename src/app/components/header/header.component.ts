import { trigger } from '@angular/animations';
import { Component,TemplateRef, OnInit , ViewChild ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @ViewChild('sideCard') sideCard?:ElementRef;

  constructor(private router:Router , private ngbModal:NgbModal,private cartService:CartService){}
  public sidebarShow: boolean = false;
  cartItemCount:number = 0;

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(cartItems =>{
      this.cartItemCount = cartItems.length;
    })
  }
  goToHome(){
    this.router.navigate(['home']);
  }
  goToMenu(){
    this.router.navigate(['menu']);
  }
  goToCart(){
    this.router.navigate(['cart']);
  }

  closeSideBar(isShow:boolean){
      this.sidebarShow = isShow;
  }

  openLogin(){
      this.ngbModal.open(LoginComponent)
  }
  

}
