import { TestBed, inject } from '@angular/core/testing';

import { GotdataService } from './gotdata.service';

describe('GotdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GotdataService]
    });
  });

  it('should be created', inject([GotdataService], (service: GotdataService) => {
    expect(service).toBeTruthy();
  }));
});
