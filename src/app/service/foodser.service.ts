import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FoodserService {
  cartItems:any[]=[];
  foodItemDetails=[
    {
      src:"./../../assets/images/burger2.jpg",
      name:"Burger",
      star:"⭐⭐⭐⭐",
      price:75,
      cusion:"Italic"
    },
    {
     src:"./../../assets/images/pizza.jpg",
     name:"Pizza",
     star:"⭐⭐⭐⭐",
     price:299,
     cusion:"Italic"
   },
   {
     src:"./../../assets/images/patisserie.jpg",
     name:"Cookies",
     star:"⭐⭐⭐⭐",
     price:65,
     cusion:"Italic"
   },
   {
     src:"./../../assets/images/momos.jpg",
     name:"Momos",
     star:"⭐⭐⭐",
     price:100,
     cusion:"Chinese"
   },
   {
    src:"./../../assets/images/sandwich.jpg",
    name:"Sandwich",
    star:"⭐⭐⭐",
    price:45,
    cusion:"italic"
  },
  {
    src:"./../../assets/images/pav.jpg",
    name:"Pav Bhaji",
    star:"⭐⭐⭐",
    price:65,
    cusion:"Indian"
  },
  {
    src:"./../../assets/images/noodles.jpg",
    name:"Hoka Noodles",
    star:"⭐⭐⭐",
    price:100,
    cusion:"Chinese"
  },
   {
     src:"./../../assets/images/dosa.jpg",
     name:"Dosa",
     star:"⭐⭐⭐⭐",
     price:175,
     cusion:"Indian"
   },
   {
     src:"./../../assets/images/rajbog.jpg",
     name:"MahaRaja Bhoj",
     star:"⭐⭐⭐⭐",
     price:799,
     cusion:"Indian"
   },
   {
     src:"./../../assets/images/gujarati.jpg",
     name:"Gujarati  Thali",
     star:"⭐⭐⭐⭐",
     price:599,
     cusion:"Indian"
   },
   {
     src:"./../../assets/images/rajsthani.jpg",
     name:"Rajsthani Thali",
     star:"⭐⭐⭐⭐",
     price:499,
     cusion:"Indian"
   },
   {
     src:"./../../assets/images/colddrink.jpg",
     name:"Cold Drink",
     star:"⭐⭐⭐⭐",
     price:85,
     cusion:"American"
   }

 
  ]
  reteriveData:any;
  constructor(private http:HttpClient) {
    
   }
  setData(value:any){
    this.reteriveData=value;
    
    console.log(value);
    return this.http.post(`${this.foodItemDetails}`,value)
  }
  setCart(value:any){
    this.cartItems.push(value);
    console.log(value);
    return this.http.post(`${this.foodItemDetails}`,value)
  }
  getData(){
    let addTocart =this.foodItemDetails.filter(data=>{
      return (this.reteriveData.source===data.src);
    });
    return addTocart;
  }
  
}
