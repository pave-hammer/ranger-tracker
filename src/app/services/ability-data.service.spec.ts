import { TestBed } from '@angular/core/testing';

import { AbilityDataService } from './ability-data.service';

describe('AbilityDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbilityDataService = TestBed.get(AbilityDataService);
    expect(service).toBeTruthy();
  });
});
