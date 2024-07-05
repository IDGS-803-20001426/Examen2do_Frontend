import { TestBed } from '@angular/core/testing';

import { GuitarStoreService } from './guitar-store.service';

describe('GuitarStoreService', () => {
  let service: GuitarStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
