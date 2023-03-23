import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeFrameComponent } from './meme-frame.component';

describe('MemeFrameComponent', () => {
  let component: MemeFrameComponent;
  let fixture: ComponentFixture<MemeFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
