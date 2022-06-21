import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTenComponent } from './servey-ten.component';

describe('ServeyTenComponent', () => {
  let component: ServeyTenComponent;
  let fixture: ComponentFixture<ServeyTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
