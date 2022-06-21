import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeySixComponent } from './servey-six.component';

describe('ServeySixComponent', () => {
  let component: ServeySixComponent;
  let fixture: ComponentFixture<ServeySixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeySixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
