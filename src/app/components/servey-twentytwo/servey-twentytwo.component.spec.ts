import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwentytwoComponent } from './servey-twentytwo.component';

describe('ServeyTwentytwoComponent', () => {
  let component: ServeyTwentytwoComponent;
  let fixture: ComponentFixture<ServeyTwentytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwentytwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwentytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
