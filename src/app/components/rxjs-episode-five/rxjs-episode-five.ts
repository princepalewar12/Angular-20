import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { combineLatest, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-rxjs-episode-five',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './rxjs-episode-five.html',
  styleUrl: './rxjs-episode-five.scss',
})
export class RxjsEpisodeFive implements OnInit {
  countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];

  userForm: FormGroup;
  passwordMismatch = false;
  searchResults: string[] = [];
  searchControl: FormControl = new FormControl("");

  private fb = inject(FormBuilder);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      subscribe: [false],
      email: [''],
      password: [''],
      confirmPassword: [''],
      age: ['', [Validators.required, Validators.min(18)]],
      drivingLicense: [''],
      country: [''],
      currency: [''],
      search: ['']
    })
  }

  ngOnInit(): void {
    this.userForm.controls['name'].valueChanges.subscribe((res) => {
      // debugger;
    })

    // this.searchControl.valueChanges.subscribe((searchText) => {
    //   console.log('search text ' + searchText);

    // })

    this.searchControl.valueChanges.pipe(debounceTime(2000), distinctUntilChanged()).subscribe((res => {
      console.log(res);

    }))

    this.userForm.valueChanges.subscribe((formValue: any) => {

    })

    this.userForm.controls['confirmPassword'].disable();

    this.userForm.controls['password'].valueChanges.subscribe((res) => {
      if (res != "") {
        this.userForm.controls['confirmPassword'].addValidators([Validators.required]);
        this.userForm.controls['confirmPassword'].enable();
      }
    })

    this.userForm.statusChanges.subscribe((res) => {
    })

    combineLatest([
      this.userForm.controls['password'].valueChanges,
      this.userForm.controls['confirmPassword'].valueChanges
    ]).subscribe(([pwd, conpwd]: any) => {
      this.passwordMismatch = pwd && conpwd && pwd != conpwd
    })
  }

  onSubmit() {

  }
}
