import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DemoserviceService } from '../../service/demoservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
   signUp = this.fb.group({
     emailAddr:new FormControl('',[
       Validators.required,
       Validators.email
     ]
     ),
     create:new FormControl('',[
      Validators.required
    ]),
     confirm:new FormControl('',[
      Validators.required
    ]),
     dob:new FormControl('',[
      Validators.required
    ])
   })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  sign(){
    if(this.signUp.controls['emailAddr'].value===null || this.signUp.controls['create'].value===null || this.signUp.controls['confirm'].value===null || this.signUp.controls['dob'].value===null){  
      alert("Please enter a details");
    }
    else{
         alert("You have been successfully register");
    }
    console.log(this.signUp.value.dob);
    console.log(this.signUp.value.create);
    console.log(this.signUp.value.confirm);
  }

}
