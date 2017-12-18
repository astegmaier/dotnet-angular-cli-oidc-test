import { TestBed, inject } from '@angular/core/testing';

import { ServerTokenStorageService } from './server-token-storage.service';

describe('ServerTokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerTokenStorageService]
    });
  });

  it('should be created', inject([ServerTokenStorageService], (service: ServerTokenStorageService) => {
    expect(service).toBeTruthy();
  }));
});
