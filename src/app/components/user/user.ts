import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from './user-service';
import { Observable, takeUntil } from 'rxjs';
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
    emailId: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    fullName: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    mobileNo: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  })
  private userService = inject(UserService)
  public userList$: Observable<any[]>;
  isFormSubmitted = signal<boolean>(false)
  constructor() {
    this.userList$ = this.userService.getUserData();
  }
  onSaveUser() {
    this.isFormSubmitted.set(true)
    const formValues = this.userForm.value;
    console.log(formValues);
    if (this.userForm.valid) {
      this.userService.addUser(formValues).subscribe({
        next: (res) => {
          alert("User added succesfully")
          console.log(res);
          this.isFormSubmitted.set(false);

        }, error(err) {
          console.log(err);

        }
      })
    }
  }
  editUser(user: any) {
    this.userForm = new FormGroup({
      userId: new FormControl(user.userId),
      emailId: new FormControl(user.emailId),
      password: new FormControl(user.password),
      fullName: new FormControl(user.fullName),
      mobileNo: new FormControl(user.mobileNo),
    })
  }
}
