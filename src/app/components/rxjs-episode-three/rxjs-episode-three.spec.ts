import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEpisodeThree } from './rxjs-episode-three';

describe('RxjsEpisodeThree', () => {
  let component: RxjsEpisodeThree;
  let fixture: ComponentFixture<RxjsEpisodeThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEpisodeThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEpisodeThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
