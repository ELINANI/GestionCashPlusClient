import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNationalComponent } from './content-national.component';

describe('ContentNationalComponent', () => {
  let component: ContentNationalComponent;
  let fixture: ComponentFixture<ContentNationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNationalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
