import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyOneComponent } from './servey-one.component';

describe('ServeyOneComponent', () => {
  let component: ServeyOneComponent;
  let fixture: ComponentFixture<ServeyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
