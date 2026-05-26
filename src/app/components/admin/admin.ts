import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
  constructor() {
    console.log("Constructor called!");
    // property initialization or dependency injection can be done here
  }
  ngOnInit() {
    console.log("ngOnInit called!");
    // api call
    // subcribe to services 
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    // dom manipulation
  }
  ngOnDestroy() {
    console.log("ngOnDestroy called!");
    // cleanup code, unsubcribe to services, remove event listeners
  }
}
