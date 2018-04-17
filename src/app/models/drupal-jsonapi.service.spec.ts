import { TestBed, inject } from '@angular/core/testing';

import { DrupalNodeService } from './drupal-node.service';

describe('DrupalNodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrupalNodeService]
    });
  });

  it('should be created', inject([DrupalNodeService], (service: DrupalNodeService) => {
    expect(service).toBeTruthy();
  }));
});
