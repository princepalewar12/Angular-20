import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeTwoService {
  http = inject(HttpClient);

  getUserData() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(
      tap((data) => console.log("Original Data:", data)),
      map((userList: any) => userList.map((user: any) => {
        return {
          id: user.id,
          name: user.name,
        };
      })));
  }
  getSingleUserData() {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users/3").pipe(map((userData: any) =>
      userData.address
    ))
  }
}
