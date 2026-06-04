import { TestBed } from '@angular/core/testing';

import { EpisodeTwoService } from './episode-two-service';

describe('EpisodeTwoService', () => {
  let service: EpisodeTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
