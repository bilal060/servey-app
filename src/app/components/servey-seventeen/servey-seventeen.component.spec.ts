import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeySeventeenComponent } from './servey-seventeen.component';

describe('ServeySeventeenComponent', () => {
  let component: ServeySeventeenComponent;
  let fixture: ComponentFixture<ServeySeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeySeventeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeySeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
