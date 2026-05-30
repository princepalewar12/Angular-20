import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(""),
    password: new FormControl(""),
    fullName: new FormControl(""),
    mobileNo: new FormControl(""),
  })
  private userService = inject(UserService)
  public userList$: Observable<any[]>;

  constructor() {
    this.userList$ = this.userService.getUserData();
  }
  onSaveUser() {
    const formValues = this.userForm.value;
    console.log(formValues);
    this.userService.addUser(formValues).subscribe({
      next: (res) => {
        alert("User added succesfully")
        console.log(res);

      }, error(err) {
        console.log(err);

      }
    })
  }
  editUser(user:any) {
    this.userForm = new FormGroup({
      userId: new FormControl(user.userId),
      emailId: new FormControl(user.emailId),
      password: new FormControl(user.password),
      fullName: new FormControl(user.fullName),
      mobileNo: new FormControl(user.mobileNo),
    })
  }
}
