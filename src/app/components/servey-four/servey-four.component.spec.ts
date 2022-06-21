import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyFourComponent } from './servey-four.component';

describe('ServeyFourComponent', () => {
  let component: ServeyFourComponent;
  let fixture: ComponentFixture<ServeyFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
