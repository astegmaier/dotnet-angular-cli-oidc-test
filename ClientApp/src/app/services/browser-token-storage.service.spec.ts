import { TestBed, inject } from '@angular/core/testing';

import { BrowserTokenStorageService } from './browser-token-storage.service';

describe('BrowserTokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserTokenStorageService]
    });
  });

  it('should be created', inject([BrowserTokenStorageService], (service: BrowserTokenStorageService) => {
    expect(service).toBeTruthy();
  }));
});
