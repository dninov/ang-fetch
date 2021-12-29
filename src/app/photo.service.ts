import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface UnsplashResponse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random?client_id=5-eUw9zqi0yxDMLBGNudboVyqi4syCfYjtH9LzXAc4w')
  }

}
