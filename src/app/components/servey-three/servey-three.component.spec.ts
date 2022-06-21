import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyThreeComponent } from './servey-three.component';

describe('ServeyThreeComponent', () => {
  let component: ServeyThreeComponent;
  let fixture: ComponentFixture<ServeyThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
