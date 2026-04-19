import { Routes } from '@angular/router';
import {HomeComponent} from './home/home';//pas besoin de .ts
import {ProductsComponent} from './products/products';//
export const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "prods" , component: ProductsComponent},

  ];
