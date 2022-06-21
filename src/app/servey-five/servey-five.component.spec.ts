import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyFiveComponent } from './servey-five.component';

describe('ServeyFiveComponent', () => {
  let component: ServeyFiveComponent;
  let fixture: ComponentFixture<ServeyFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
