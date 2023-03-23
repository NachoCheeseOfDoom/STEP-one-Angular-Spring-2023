import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemeApiService } from '../services/meme-api.service';



@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent {
  meme: any = {}
  // text: any = {
  //   textValues: ''
  // };
  @Input('palabraGuardada') palabraGuardada: string = '';

  formGroup$: FormGroup
  // 👇👇👇👇👇👇
  // word = document.querySelector('#palabraIngresada');
  // button = document.getElementById('button-action');
  // text = document.getElementById('shows-text')
  // 👆👆👆👆👆👆👆

  constructor(
    private memeApiService: MemeApiService,
    private readonly formBuilder: FormBuilder) {

    this.formGroup$ = this.creatFormGroup(this.formBuilder)
    console.log(this.formGroup_)
  }

  ngOnInit(): void {
    document.getElementById('memeImg')!.style.visibility = 'hidden';
  }

  creatFormGroup(formBuilder: FormBuilder) {
    const word = ['', [Validators.required]]
    return formBuilder.group({
      word
    })
  }

  // 👇👇👇👇👇👇
  wordValue($event: Event) {
    $event.preventDefault()
    const x = this.formGroup_.get('word')
    // this.text.textValues.innerHTML = x;
    console.log(x?.value)
  }
  // 👆👆👆👆👆👆👆

  showFormControls(form: any) {
    return form && this.formGroup_.get('word')?.value;
  }

  get formGroup_() {
    return this.formGroup$
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
