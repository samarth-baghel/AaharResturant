import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodItemRoutingModule } from './food-item-routing.module';
import { FoodItemComponent } from './food-item.component';
import { CurdoperationComponent } from './curdoperation/curdoperation.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FoodItemComponent,
    CurdoperationComponent
  ],
  imports: [
    CommonModule,
    FoodItemRoutingModule,HttpClientModule
  ],
  exports:[
    FoodItemComponent
  ]
})
export class FoodItemModule { }
