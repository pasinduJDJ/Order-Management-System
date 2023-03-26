import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartScreenComponent } from './components/cart-screen/cart-screen.component';
import { HomeComponent } from './components/home/home.component';
import { MenuscreenComponent } from './components/menuscreen/menuscreen.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuscreenComponent},
  {path: 'cart', component: CartScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
