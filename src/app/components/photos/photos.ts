import { Component, inject, OnInit, signal } from '@angular/core';
import { PhotosService } from './photos-service';
import { FormsModule, NgForm } from "@angular/forms";
import { JsonPipe } from '@angular/common';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-photos',
  imports: [FormsModule, JsonPipe],
  providers: [PhotosService],
  templateUrl: './photos.html',
  styleUrl: './photos.scss',
})
export class Photos implements OnInit {

  private photosService = inject(PhotosService)
  photosInfo: any;
  payload = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }
  isFormSubmitted = signal<boolean>(false)
  ngOnInit() {
    // this.getPhotoDetails()
  }

  getPhotoDetails() {
    this.photosService.getPhotsDetail().subscribe({
      next: (res): any => {
        console.log(res);
        this.photosInfo = res;
      }, error() {

      }
    })
  }
  setPhotoData(form: NgForm) {
    debugger;
    this.isFormSubmitted.set(true)
    if (form.valid) {
      this.photosService.addPhotoData(this.payload).subscribe((res: any) => {
        this.getPhotoDetails();
        form.reset();
        this.isFormSubmitted.set(false);
      })
    }
  }
  editPhotoData(data: any) {
    this.payload = data
  }
}
