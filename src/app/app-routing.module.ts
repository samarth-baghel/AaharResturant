import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'logIn', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'foodDetail', loadChildren: () => import('./food-item/food-item.module').then(m => m.FoodItemModule) },
 { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
