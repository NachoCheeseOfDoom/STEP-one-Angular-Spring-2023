import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MemeApiService {

  memeURL = 'https://meme-api.com/gimme'
  constructor(private http: HttpClient) { }


  getMeme() {
    return this.http.get(this.memeURL);
  }

}