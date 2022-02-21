import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-alert-comp',
  templateUrl: './alert-comp.component.html',
  styleUrls: ['./alert-comp.component.css']
})
export class AlertCompComponent implements OnInit {
@Input() message: any;
@Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  closed(){
    this.close.emit();
  }

}
