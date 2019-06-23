import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDeviseComponent } from './content-devise.component';

describe('ContentDeviseComponent', () => {
  let component: ContentDeviseComponent;
  let fixture: ComponentFixture<ContentDeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
