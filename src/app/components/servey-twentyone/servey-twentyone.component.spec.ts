import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwentyoneComponent } from './servey-twentyone.component';

describe('ServeyTwentyoneComponent', () => {
  let component: ServeyTwentyoneComponent;
  let fixture: ComponentFixture<ServeyTwentyoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwentyoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwentyoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
