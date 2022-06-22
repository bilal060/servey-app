import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeyTwentythreeComponent } from './servey-twentythree.component';

describe('ServeyTwentythreeComponent', () => {
  let component: ServeyTwentythreeComponent;
  let fixture: ComponentFixture<ServeyTwentythreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeyTwentythreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeyTwentythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
