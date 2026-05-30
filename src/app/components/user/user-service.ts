import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient)

  addUser(user: any) {
    return this.http.post("https:api.freeprojectapi.com/api/GoalTracker/register", user)
  }
  getUserData(){
    return this.http.get<any[]>("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
  }
}
