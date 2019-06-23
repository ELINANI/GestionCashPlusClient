import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFawatirComponent } from './content-fawatir.component';

describe('ContentFawatirComponent', () => {
  let component: ContentFawatirComponent;
  let fixture: ComponentFixture<ContentFawatirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFawatirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFawatirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
