import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomeComponent } from './telecome.component';

describe('TelecomeComponent', () => {
  let component: TelecomeComponent;
  let fixture: ComponentFixture<TelecomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
