import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwelveComponent } from './servey-twelve.component';

describe('ServeyTwelveComponent', () => {
  let component: ServeyTwelveComponent;
  let fixture: ComponentFixture<ServeyTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
