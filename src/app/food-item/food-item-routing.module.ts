import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurdoperationComponent } from './curdoperation/curdoperation.component';
import { FoodItemComponent } from './food-item.component';

const routes: Routes = [{ path: '', component: FoodItemComponent },
{path:"curd",component:CurdoperationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodItemRoutingModule { }
