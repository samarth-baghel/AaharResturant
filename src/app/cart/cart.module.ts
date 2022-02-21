import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CartComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
