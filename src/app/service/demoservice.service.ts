import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
 data = [
   {email:"admin@gmail.com",password:"12345",dob:"1998-07-25"},
   {email:"demo@gmail.com",password:"1234567",dob:"1997-12-19"},
   {email:"samarth@gmail.com",password:"2468",dob:"1998-07-26"},
   {email:"utkarsh@gmail.com",password:"36912",dob:"2002-03-30"},
   {email:"ayush@gmail.com",password:"481216",dob:"1998-05-05"},
   {email:"harsh@gmail.com",password:"51015",dob:"1998-09-10"},
 ]
  constructor() { }
}
