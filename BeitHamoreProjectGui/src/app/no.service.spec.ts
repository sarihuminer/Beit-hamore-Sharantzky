import { TestBed } from '@angular/core/testing';

import { NoService } from './no.service';

describe('NoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoService = TestBed.get(NoService);
    expect(service).toBeTruthy();
  });
});
