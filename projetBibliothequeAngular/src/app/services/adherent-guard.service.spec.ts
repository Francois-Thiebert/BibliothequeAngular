import { TestBed } from '@angular/core/testing';

import { AdherentGuardService } from './adherent-guard.service';

describe('AdherentGuardService', () => {
  let service: AdherentGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdherentGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
