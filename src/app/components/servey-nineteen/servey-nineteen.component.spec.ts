import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyNineteenComponent } from './servey-nineteen.component';

describe('ServeyNineteenComponent', () => {
  let component: ServeyNineteenComponent;
  let fixture: ComponentFixture<ServeyNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyNineteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
