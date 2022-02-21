import { Component, OnInit } from '@angular/core';

import { FoodserService } from '../service/foodser.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  public foodData: any;
  retervieDta: any;
  constructor(private fdDetails: FoodserService) {
    this.foodData = this.fdDetails.foodItemDetails;
  }
  ngOnInit(): void {

  }
  addtocart(src: any) {
    this.retervieDta = {
      source: src
    }
    this.fdDetails.setData(this.retervieDta);
  }
}
