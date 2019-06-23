import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedboxComponent } from './speedbox.component';

describe('SpeedboxComponent', () => {
  let component: SpeedboxComponent;
  let fixture: ComponentFixture<SpeedboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
