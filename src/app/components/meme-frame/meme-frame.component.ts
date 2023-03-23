import { Component } from '@angular/core';
import { MemeApiService } from 'src/app/services/meme-api.service';


@Component({
  selector: 'app-meme-frame',
  templateUrl: './meme-frame.component.html',
  styleUrls: ['./meme-frame.component.css']
})
export class MemeFrameComponent {
  meme: any = {}

  constructor(private memeApiService: MemeApiService) { }


  generateMeme() {
    this.memeApiService.getMeme().subscribe(
      (data: any) => {
        this.meme = data;
      }
    );
    const foto: any = document.getElementById('memeImg');
    if (foto.style.visibility === 'hidden') {
      foto.style.visibility = 'visible';
    }
  }
}
