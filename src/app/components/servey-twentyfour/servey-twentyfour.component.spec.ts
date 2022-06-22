import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwentyfourComponent } from './servey-twentyfour.component';

describe('ServeyTwentyfourComponent', () => {
  let component: ServeyTwentyfourComponent;
  let fixture: ComponentFixture<ServeyTwentyfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwentyfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwentyfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
