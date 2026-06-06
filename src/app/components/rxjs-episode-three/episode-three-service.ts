import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeThreeService {


  courseDuration$: BehaviorSubject<string> = new BehaviorSubject("I am prince and i mean it")

  roleBehaviour$ = new BehaviorSubject<string>("");

  roleSub$ = new Subject<string>();

  private userDetail = new Map<number, Observable<any>>();

  http = inject(HttpClient)

  getUserById(userId: number): any | undefined   {

    if (!this.userDetail.has(userId)) {
      const userDetailObs = this.http.get("https://jsonplaceholder.typicode.com/users/" + userId).pipe(shareReplay(1));

      this.userDetail.set(userId, userDetailObs);
    }
    return this.userDetail.get(userId)
  }
}
