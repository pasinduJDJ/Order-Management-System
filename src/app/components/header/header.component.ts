import { Component, OnInit , ViewChild ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sideCard') sideCard?:ElementRef;

  constructor(private router:Router){}
  public sidebarShow: boolean = false;

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
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

  

}
