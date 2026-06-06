import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EpisodeThreeService } from '../rxjs-episode-three/episode-three-service';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  // string,number,boolean,date
  courseName: string = "Angular 20";

  isActive: boolean = true;
  currentDate: Date = new Date();
  rollNumber: number = 123;
  minLengthCount = 5;
  Author_Name = "John Doe";
  styleClass = "primary";

  userId: number = 0;

  episodeThreeService = inject(EpisodeThreeService)

  constructor() {

    this.episodeThreeService.roleBehaviour$.subscribe({
      next: (res: string) => {
      }
    })
    this.episodeThreeService.roleSub$.subscribe({
      next: (res: string) => {
      }
    })


    console.log(this.courseName);

    this.courseName = "Angular 20 - Updated";
    console.log(this.courseName);
    this.courseName = '123';
    console.log(this.currentDate)
  }
  updateCourseName(value?: string) {
    this.courseName = "Angular 20 - Updated from button click";
    alert("Course name updated!");
  }
  showAlert(value: string) {
    alert(`Selected value: ${value}`);
  }
  getUser() {
    this.episodeThreeService.getUserById(this.userId).subscribe({
      next: (res: any) => {
        debugger;
      }
    })
  }
}
