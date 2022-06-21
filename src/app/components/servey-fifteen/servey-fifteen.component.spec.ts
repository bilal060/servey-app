import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyFifteenComponent } from './servey-fifteen.component';

describe('ServeyFifteenComponent', () => {
  let component: ServeyFifteenComponent;
  let fixture: ComponentFixture<ServeyFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyFifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
