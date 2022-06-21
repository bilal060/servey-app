import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwoComponent } from './servey-two.component';

describe('ServeyTwoComponent', () => {
  let component: ServeyTwoComponent;
  let fixture: ComponentFixture<ServeyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
