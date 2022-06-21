import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeySixteenComponent } from './servey-sixteen.component';

describe('ServeySixteenComponent', () => {
  let component: ServeySixteenComponent;
  let fixture: ComponentFixture<ServeySixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeySixteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeySixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
