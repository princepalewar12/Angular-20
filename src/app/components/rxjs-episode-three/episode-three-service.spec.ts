import { TestBed } from '@angular/core/testing';

import { EpisodeThreeService } from './episode-three-service';

describe('EpisodeThreeService', () => {
  let service: EpisodeThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodeThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
