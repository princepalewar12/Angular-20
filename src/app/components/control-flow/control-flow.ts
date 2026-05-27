import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFLow {
  selectCast: string = ""
  isStudents = signal<boolean>(false);
  cityList: string[] = ['main', 'code', 'angular', 'react', 'vue'];
  studentList = [
    {name: 'aaa', city: 'pune',status: true},
    {name: 'bbb', city: 'napgur',status: false},
    {name: 'ddd', city: 'mambai',status: true},
    {name: 'ccc', city: 'patna',status: false},
    {name: 'sss', city: 'shegaon',status: false},

  ]

  changeStatus(value: boolean) {
    this.isStudents.set(value)
  }
}
