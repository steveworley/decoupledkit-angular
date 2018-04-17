import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalCrudComponent } from './drupal-crud.component';

describe('DrupalCrudComponent', () => {
  let component: DrupalCrudComponent;
  let fixture: ComponentFixture<DrupalCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
