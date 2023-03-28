import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemcardComponent } from './components/itemcard/itemcard.component';
import { StackcartComponent } from './components/stackcart/stackcart.component';
import { StackcartitemComponent } from './components/stackcartitem/stackcartitem.component';
import { MenuscreenComponent } from './components/menuscreen/menuscreen.component';
import { WelcomeviewComponent } from './components/welcomeview/welcomeview.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductscreenComponent } from './components/productscreen/productscreen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    MenuComponent,
    FooterComponent,
    ItemcardComponent,
    StackcartComponent,
    StackcartitemComponent,
    MenuscreenComponent,
    WelcomeviewComponent,
    OrderComponent,
    ProductComponent,
    AddproductComponent,
    ProductscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
