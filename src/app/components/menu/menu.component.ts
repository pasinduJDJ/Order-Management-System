import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:any = [];
  ngOnInit(): void {
    this.products = [
      {
        id:1,
        name:"Burger",
        price:850
      },
      {
        id:2,
        name:"Koththu",
        price:100,
      },
      {
        id:3,
        name:"Pazta",
        price:1850
      },
      {
        id:4,
        name:"Biriyani",
        price:980,
      },
    ];
  }

}
