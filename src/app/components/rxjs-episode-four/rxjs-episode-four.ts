import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { of, forkJoin, switchMap, debounce, debounceTime, distinctUntilChanged, Subject, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-episode-four',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-episode-four.html',
  styleUrl: './rxjs-episode-four.scss',
})
export class RxjsEpisodeFour {
  stateData$ = of(["Mp", "Mh", "Hp"]);
  cityData$ = of(["Pune", "Nagpur", "mumbai"]);

  searchControl: FormControl = new FormControl()

  http = inject(HttpClient)

  loginClick$ = new Subject<void>();

  constructor() {

    const user$ = this.http.get("https://jsonplaceholder.typicode.com/users")
    const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts")

    // this.searchControl.valueChanges.subscribe((search: string) => {

    //   this.http.get("https://dummyjson.com/products/search?q=" + search).subscribe((res) => {
    //     console.log("search Response: " + res);

    //   })
    // })
    // this.searchControl.valueChanges.pipe(switchMap((searchText: string): any =>
    //   this.http.get("https://dummyjson.com/products/search?q=" + searchText)
    // )).subscribe((res: any) => {
    //   console.log("search Response: " + res);

    // })

    // better approach for search
    this.searchControl.valueChanges.pipe(debounceTime(1000), distinctUntilChanged(), switchMap(searchText =>
      this.http.get("https://dummyjson.com/products/search?q=" + searchText)
    )).subscribe((res) => {

    })


    forkJoin([user$, posts$]).subscribe((res) => {
      // debugger;
    })

    forkJoin([this.stateData$, this.cityData$]).subscribe((res) => {
      // debugger;
    })

    this.stateData$.subscribe((res) => {
      // debugger;
    })
    this.cityData$.subscribe((res) => {
      // debugger;
    })
    this.onLogin();
  }

  onLogin() {

    this.loginClick$.pipe(exhaustMap(() => this.http.get("https://jsonplaceholder.typicode.com/users"))).subscribe((res) => {
      debugger;
    })


  }
  onclick() {
    this.loginClick$.next();
  }
}
