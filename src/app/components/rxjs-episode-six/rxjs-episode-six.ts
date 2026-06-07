import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-rxjs-episode-six',
  imports: [AsyncPipe],
  templateUrl: './rxjs-episode-six.html',
  styleUrl: './rxjs-episode-six.scss',
})
export class RxjsEpisodeSix implements OnInit, OnDestroy {
  http = inject(HttpClient);

  subscription!: Subscription;

  subscriptionList: Subscription[] = [];

  subTakeUntill$!: Subject<void>;

  userList$ = new Observable<any[]>;

  ngOnInit(): void {
    this.userList$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
    this.getUsers();
    this.getPosts();
  }
  getUsers() {
    this.subscription = this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res => {

    })
  }
  getPosts() {
    const postSubscription = this.subscription = this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res => {

    })
    this.subscriptionList.push(postSubscription)
  }
  getUsersList() {
    this.http.get("https://jsonplaceholder.typicode.com/users").pipe(takeUntil(this.subTakeUntill$)).subscribe(res => {

    })
  }
  getUsersListInfo() {
    this.http.get("https://jsonplaceholder.typicode.com/users").pipe(take(1)).subscribe(res => {

    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionList.forEach(sub => {
      sub.unsubscribe();
    })
    this.subTakeUntill$.next();
  }
}
