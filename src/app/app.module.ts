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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrderscreenComponent } from './components/orderscreen/orderscreen.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeBaseComponent } from './components/home-base/home-base.component';


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
    ProductscreenComponent,
    PlaceorderComponent,
    LoginComponent,
    SignupComponent,
    OrderscreenComponent,
    HomeBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
