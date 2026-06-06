import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, take, timer } from 'rxjs';
import { EpisodeThreeService } from './episode-three-service';

@Component({
  selector: 'app-rxjs-episode-three',
  imports: [],
  templateUrl: './rxjs-episode-three.html',
  styleUrl: './rxjs-episode-three.scss',
})
export class RxjsEpisodeThree implements OnInit {

  private destroyRef = inject(DestroyRef)

  studentName$ = new Subject<string>();

  studentRollNum$ = new Subject<number>();

  takeTill$ = new Subject<void>();

  courseName$: Subject<string> = new Subject();

  responseTimer$ = timer(4000)

  thisEpisodeService = inject(EpisodeThreeService)


  constructor() {
    this.responseTimer$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      console.log(value);

      this.studentName$.next("Angular 20");

      this.studentRollNum$.next(15042)

      this.takeTill$.next();

      this.thisEpisodeService.courseDuration$.next('Great work here!')
    })
  }
  ngOnInit(): void {
    this.studentName$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val => {
      console.log(val);
    })
    this.thisEpisodeService.courseDuration$.subscribe((res) => {
  
    })
  }
}
