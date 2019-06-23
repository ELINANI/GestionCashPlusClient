import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EauElecComponent } from './eau-elec.component';

describe('EauElecComponent', () => {
  let component: EauElecComponent;
  let fixture: ComponentFixture<EauElecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EauElecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EauElecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
