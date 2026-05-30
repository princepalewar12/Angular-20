import { Component, inject, OnInit } from '@angular/core';
import { PhotosService } from './photos-service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
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
  ngOnInit() {
    this.getPhotoDetails()
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
  setPhotoData() {
    this.photosService.addPhotoData(this.payload).subscribe((res: any) => {
      this.getPhotoDetails();
    })
  }
  editPhotoData(data: any) {
    this.payload =data
  }
}
