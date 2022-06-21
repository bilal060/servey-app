import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyEightComponent } from './servey-eight.component';

describe('ServeyEightComponent', () => {
  let component: ServeyEightComponent;
  let fixture: ComponentFixture<ServeyEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
