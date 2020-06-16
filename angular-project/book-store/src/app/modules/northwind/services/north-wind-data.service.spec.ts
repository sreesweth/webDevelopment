import { TestBed } from '@angular/core/testing';

import { NorthWindDataService } from './north-wind-data.service';

describe('NorthWindDataService', () => {
  let service: NorthWindDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NorthWindDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
