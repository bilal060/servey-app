import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyElevenComponent } from './servey-eleven.component';

describe('ServeyElevenComponent', () => {
  let component: ServeyElevenComponent;
  let fixture: ComponentFixture<ServeyElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
