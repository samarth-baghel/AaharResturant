import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DemoserviceService } from '../../service/demoservice.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forget = this.fp.group({
    email: new FormControl(),
    dob: new FormControl(),
    create: new FormControl(),
    confirm: new FormControl()
  })
  constructor(private fp: FormBuilder, private userdata: DemoserviceService) { }

 
  ngOnInit(): void {
  }
  submitBtn() {
   let user: any = this.userdata.data.find((details) => {
      return (this.forget.controls['email'].value === details.email);
    });
    if (user.dob === this.forget.controls['dob'].value && this.forget.controls['create'].value === this.forget.controls['confirm'].value) {
      alert("Your Password have been change successful");
    }
    else {
      alert("Enter a valid details");
    }

  }

}
