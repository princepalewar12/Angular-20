import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from, interval, Observable, of, Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basics',
  imports: [],
  templateUrl: './rxjs-basics.html',
  styleUrl: './rxjs-basics.scss',
})
export class RxjsBasics implements OnInit {

  private destroyRef = inject(DestroyRef)
  private stop$ = new Subject<void>();
  cityList: string[] = ['pune', 'mumbai', 'nagpur1'];
  cityList$ = of(['pune', 'mumbai', 'nagpur1']);//emit all the values at once
  cityList2$ = from(['pune', 'mumbai', 'nagpur1']);// emit the value one by one
  myInterval$ = interval(1000);//behave like a setinterval
  myInterval2$ = interval(1000).pipe(
    takeUntilDestroyed(this.destroyRef)
  )//this will get destroy automatically when i change the component and start again when we come back to the component
  myinterval3$ = interval(1000).pipe(
    takeUntil(this.stop$)
  )
  timer$ = timer(5000)
  constructor() {

    const myObs$ = new Observable(value => {
      value.next("Hi my name is prince")
    })

    myObs$.subscribe(message => {
      console.log(message);

    })
    this.cityList$.subscribe((res: string[]) => {
      console.log(res);

    })
    this.cityList2$.subscribe((value: string) => {
      console.log(value);

    })
    this.myinterval3$.subscribe((num: number) => {
      console.log(num);

    })
    this.timer$.subscribe((res) => {
      console.log('working');
      this.stopInterval()
    })
  }
  ngOnInit(): void {
    this.timer$.subscribe((res) => {
      console.log('working');
      this.stopInterval()
    })
  }


  // call this anytime to STOP
  stopInterval(): void {
    this.stop$.next();     // emits — stops the interval
    this.stop$.complete(); // closes the subject permanently
  }
}
