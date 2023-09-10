import { TestBed } from '@angular/core/testing';

import { DesignUlilityService } from './design-ulility.service';

describe('DesignUlilityService', () => {
  let service: DesignUlilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUlilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
