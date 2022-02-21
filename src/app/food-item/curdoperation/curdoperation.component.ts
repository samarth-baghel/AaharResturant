import { Component, OnInit } from '@angular/core';
import { FoodserService } from '../../service/foodser.service';

@Component({
  selector: 'app-curdoperation',
  templateUrl: './curdoperation.component.html',
  styleUrls: ['./curdoperation.component.css']
})
export class CurdoperationComponent implements OnInit {
  foodData: any;
  c: number = 1;
  retervieDta: any;
  constructor(private dt: FoodserService) {
  

  }

  ngOnInit(): void {
    this.foodData = this.dt.getData();
    console.log(this.c);

  }
  add() {
    // let a: any = document.querySelector('.quantity');
    // let b: number = ++this.c;
    // a.innerHTML = `${b}`;
    // console.log(a.innerText = `${b}`);
    this.c++;
  }
  sub() {
    // let a: any = document.querySelector('.quantity'),
    //   b = --this.c;
    // a.innerText = `${b}`;
    // console.log(b);
    this.c--;
  }
  addtocart(src: any, tp: any, name:any) {
    this.retervieDta = {
      source: src,
      totalPrice: tp,
      name: name,
      quanity:this.c
    }
    console.log(this.retervieDta)
    this.dt.setCart(this.retervieDta);
  }

}
