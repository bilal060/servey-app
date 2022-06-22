import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwentyComponent } from './servey-twenty.component';

describe('ServeyTwentyComponent', () => {
  let component: ServeyTwentyComponent;
  let fixture: ComponentFixture<ServeyTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwentyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
