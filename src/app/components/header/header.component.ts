import { trigger } from '@angular/animations';
import { Component,TemplateRef, OnInit , ViewChild ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @ViewChild('sideCard') sideCard?:ElementRef;

  constructor(
    private router:Router , 
    private ngbModal:NgbModal,
    private cartService:CartService,
    private userService:UserService
  ){}

  public sidebarShow: boolean = false;
  cartItemCount:number = 0;
  isAdmin:boolean = false;
  isLoggedIn:boolean = false;

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(cartItems =>{
      this.cartItemCount = cartItems.length;
    })

    this.userService.isAdmin.subscribe(isAdmin =>{
      this.isAdmin = isAdmin;
    })
     this.userService.isLoggedIn.subscribe(isLoggedIn =>{
      this.isLoggedIn = isLoggedIn;
     });
  }
  
  closeSideBar(isShow:boolean){
      this.sidebarShow = isShow;
  }

  openLogin(){
      this.ngbModal.open(LoginComponent)
  }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['/app/home']);
  }
  

}
