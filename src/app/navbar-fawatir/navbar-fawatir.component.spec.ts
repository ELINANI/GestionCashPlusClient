import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFawatirComponent } from './navbar-fawatir.component';

describe('NavbarFawatirComponent', () => {
  let component: NavbarFawatirComponent;
  let fixture: ComponentFixture<NavbarFawatirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFawatirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFawatirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
