import { TestBed } from '@angular/core/testing';

import { GetSpellsService } from './get-spells.service';

describe('GetSpellsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSpellsService = TestBed.get(GetSpellsService);
    expect(service).toBeTruthy();
  });
});
