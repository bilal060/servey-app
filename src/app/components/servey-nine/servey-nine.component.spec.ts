import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyNineComponent } from './servey-nine.component';

describe('ServeyNineComponent', () => {
  let component: ServeyNineComponent;
  let fixture: ComponentFixture<ServeyNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
