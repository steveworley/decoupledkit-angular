import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlSingleComponent } from './graphql-single.component';

describe('GraphqlSingleComponent', () => {
  let component: GraphqlSingleComponent;
  let fixture: ComponentFixture<GraphqlSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
