import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayNeoComponent } from './pay-neo.component';

describe('PayNeoComponent', () => {
  let component: PayNeoComponent;
  let fixture: ComponentFixture<PayNeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayNeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayNeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
