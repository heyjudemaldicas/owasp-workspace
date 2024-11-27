import { TestBed } from '@angular/core/testing';

import { OwaspLibService } from './owasp-lib.service';

describe('OwaspLibService', () => {
  let service: OwaspLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwaspLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
