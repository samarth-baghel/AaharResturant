import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'forgotPassword', component: ForgetPasswordComponent },
{ path: 'signUp', component: SignUPComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
