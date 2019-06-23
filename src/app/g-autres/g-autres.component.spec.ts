import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GAutresComponent } from './g-autres.component';

describe('GAutresComponent', () => {
  let component: GAutresComponent;
  let fixture: ComponentFixture<GAutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GAutresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
