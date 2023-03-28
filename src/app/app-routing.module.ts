import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuscreenComponent } from './components/menuscreen/menuscreen.component';
import { OrderscreenComponent } from './components/orderscreen/orderscreen.component';
import { ProductscreenComponent } from './components/productscreen/productscreen.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuscreenComponent},
  {path: 'product', component: ProductscreenComponent},
  {path: 'order', component: OrderscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
