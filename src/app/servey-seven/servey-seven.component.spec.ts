import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeySevenComponent } from './servey-seven.component';

describe('ServeySevenComponent', () => {
  let component: ServeySevenComponent;
  let fixture: ComponentFixture<ServeySevenComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeySevenComponent ]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeySevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
