import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  boldClass: string = '';
  ngOnInit(): void {
  }
  navgate(value: any) {
    this.boldClass = 'active';
    console.log(value);
    this.router.navigate([`/${value}`])
  }
}
