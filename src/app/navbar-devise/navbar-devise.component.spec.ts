import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDeviseComponent } from './navbar-devise.component';

describe('NavbarDeviseComponent', () => {
  let component: NavbarDeviseComponent;
  let fixture: ComponentFixture<NavbarDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
