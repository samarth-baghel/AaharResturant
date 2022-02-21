import { Component, OnInit } from '@angular/core';
import { FoodserService } from '../service/foodser.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartDetails:any;
  constructor(private cartItem:FoodserService) {
    this.cartDetails=this.cartItem.cartItems;
 console.log(this.cartDetails)
   
   }

  ngOnInit(): void {
  }
  delete(){
    let a:any = document.querySelector('.card');
    a.remove();
  }

}
