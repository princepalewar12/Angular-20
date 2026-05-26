import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  courseName = 'Angular Signals';

  angularVersion = signal("20");

  courseDuration = signal<string>("3 hours");

  cityList = signal<string[]>(['nagpur', 'pune', 'mumbai'])

  student = signal<{ name: string, number: number }>({
    name: 'prince',
    number: 1111
  })

  changeDuration() {
    this.courseName = "React js"

    this.courseDuration.set("3 months")
  }
  addCity(place: string) {
    this.cityList.update((city: string[]) => [...city, place])
  }
  changeObj(value: string) {
    this.student.update((oldObj) => ({
      ...oldObj,
      name: value
    }))
  }
}
