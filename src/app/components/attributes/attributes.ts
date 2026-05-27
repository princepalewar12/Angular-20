import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attributes',
  imports: [NgClass, NgStyle],
  templateUrl: './attributes.html',
  styleUrl: './attributes.scss',
})
export class Attributes {
  studentList = [
    { name: 'aaa', city: 'pune', status: true },
    { name: 'bbb', city: 'napgur', status: false },
    { name: 'ddd', city: 'mambai', status: true },
    { name: 'ccc', city: 'patna', status: false },
    { name: 'sss', city: 'shegaon', status: false },

  ]
  myCss: any = {
    'background-color': 'blue',
    'color': 'red',
    'font-size': '12px  ',
  }
}
