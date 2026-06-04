import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { EpisodeTwoService } from './episode-two-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-episode-two',
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-episode-two.html',
  styleUrl: './rxjs-episode-two.scss',
})
export class RxjsEpisodeTwo {
  noList$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  roleList$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  timeinterval = interval(1000);

  episodeTwoService = inject(EpisodeTwoService);

  searchControl = new FormControl()
  constructor() {

    this.timeinterval.pipe(take(6)).subscribe({
      next: (res) => {
        console.log(res);
  
      }
  })


    // this.searchControl.valueChanges.pipe(filter(searchtext => searchtext.length > 3
    // )).subscribe((res: any) => {
    //   console.log(res);

    // })


    // this.timeinterval.pipe(filter(num => num % 2 == 0)).subscribe({
    //   next: (res) => {
    //     console.log(res);

    //   }
    // })


    // this.noList$.pipe(filter(num => num % 2 == 0)).subscribe((value: number) => {
    //   console.log(value);
    // })

    // this.roleList$.pipe(map((value) => value.filter(m => m % 2 == 0))
    // ).subscribe((res) => {
    //   console.log(res);

    // })

    // this.episodeTwoService.getUserData().subscribe({
    //   next: (res) => {
    //     console.log(res);

    //   },
    //   error(err) {
    //     console.log(err);

    //   }
    // })
    // this.episodeTwoService.getSingleUserData().subscribe({
    //   next: (res) => {
    //     console.log(res);

    //   },
    //   error(err) {
    //     console.log(err);

    //   }
    // })
  }
}
