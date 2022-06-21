import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyEighteenComponent } from './servey-eighteen.component';

describe('ServeyEighteenComponent', () => {
  let component: ServeyEighteenComponent;
  let fixture: ComponentFixture<ServeyEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyEighteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
