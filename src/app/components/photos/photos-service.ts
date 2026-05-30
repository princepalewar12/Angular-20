import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {

  private http = inject(HttpClient)
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  getPhotsDetail() {
    return this.http.get<any[]>(`${this.apiUrl}`)
  }
  addPhotoData(obj: any) {
    return this.http.post<any[]>(this.apiUrl, obj)
  }
}
