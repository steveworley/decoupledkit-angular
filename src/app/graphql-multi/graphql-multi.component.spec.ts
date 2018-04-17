import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlMultiComponent } from './graphql-multi.component';

describe('GraphqlMultiComponent', () => {
  let component: GraphqlMultiComponent;
  let fixture: ComponentFixture<GraphqlMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
