import { TestBed } from '@angular/core/testing';

import { TremordataService } from './tremordata.service';

describe('TremordataService', () => {
  let service: TremordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TremordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
