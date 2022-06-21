import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyThirteenComponent } from './servey-thirteen.component';

describe('ServeyThirteenComponent', () => {
  let component: ServeyThirteenComponent;
  let fixture: ComponentFixture<ServeyThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyThirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
