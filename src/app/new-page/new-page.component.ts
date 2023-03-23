import { Component, Input } from '@angular/core';
import { MemeApiService } from '../services/meme-api.service';



@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {
  meme: any = {}
  @Input('palabraGuardada') palabraGuardada: string = '';

  word = document.querySelector('#palabraIngresada');
  button = document.getElementById('button-action');
  text = document.getElementById('shows-text')


  constructor(private memeApiService: MemeApiService) { }

  ngOnInit(): void {
    document.getElementById('memeImg')!.style.visibility = 'hidden';

  }



  wordValue() {
    // this.text!.innerHTML = this.word.value
  }

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
