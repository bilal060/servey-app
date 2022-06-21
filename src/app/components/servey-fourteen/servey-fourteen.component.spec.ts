import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyFourteenComponent } from './servey-fourteen.component';

describe('ServeyFourteenComponent', () => {
  let component: ServeyFourteenComponent;
  let fixture: ComponentFixture<ServeyFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyFourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
