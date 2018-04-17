import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMockComponent } from './api-mock.component';

describe('ApiMockComponent', () => {
  let component: ApiMockComponent;
  let fixture: ComponentFixture<ApiMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
