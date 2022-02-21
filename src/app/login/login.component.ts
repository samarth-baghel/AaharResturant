import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { DemoserviceService } from '../service/demoservice.service';
import { AlertCompComponent } from './alert-comp/alert-comp.component';
import { PlaceholderDirective } from './placeholder.directive';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  public arr: any;
  private subscgf!: Subscription;
  @ViewChild(PlaceholderDirective)
  alertHost!: PlaceholderDirective;
  constructor(private userDatas: DemoserviceService, private componentFactory: ComponentFactoryResolver) {
    this.arr = this.userDatas.data;
  }


  ngOnInit(): void {
  }
  private showError(message: string) {
    const alertComp = this.componentFactory.resolveComponentFactory(AlertCompComponent);
    const placeHold = this.alertHost.viewRefer;
    placeHold.clear();
    const copmrefer = placeHold.createComponent(alertComp);
    copmrefer.instance.message = message;
    this.subscgf = copmrefer.instance.close.subscribe(() => {
      this.subscgf.unsubscribe();
      placeHold.clear();
    });
  }
  login() {
    let dataObservales$ = from(this.userDatas.data)
    // let find = this.arr.find((data: any) => {
    //   return (this.email === data.email && this.password === data.password);
    // })
    // console.log(find);
    // if (find == null) {
    //   alert("Enter authorized details");

    // }
    // else {
    //   alert("Welcome to our resturant");
    //   window.location.href = '/foodDetail';
    // }
    dataObservales$.subscribe({
      next: (data) => {
        if (data.email === this.email && data.password === this.password) {
          alert("Welcome to our resturant");
          window.location.href = '/foodDetail';
        }
      },
      error: (err) => {
        alert("Enter authorized details");
        alert(err);
        this.showError(err);

      },
      complete: () => {
        console.log("Complete")
        this.showError("enter a coorect details");
      }

    });
    // this.arr.find((details) => {
    //   if (this.email === details.email && this.password === details.password) {
    //     alert("WelCome to Tea'se Me");
    //   }
    //   else {
    //     alert("Enter authorized details");
    //   }
    // });
  }
  // tester(){
  //   const obj={
  //     userId:this.email,
  //     pass:this.password
  //   };
  //   this.arr.push(obj);
  //   this.testingService.getDetail(obj);
  // }
}
