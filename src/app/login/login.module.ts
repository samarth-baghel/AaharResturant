import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceholderDirective } from './placeholder.directive';
import { AlertCompComponent } from './alert-comp/alert-comp.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUPComponent,
    ForgetPasswordComponent,
    PlaceholderDirective,
    AlertCompComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
