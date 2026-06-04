import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEpisodeTwo } from './rxjs-episode-two';

describe('RxjsEpisodeTwo', () => {
  let component: RxjsEpisodeTwo;
  let fixture: ComponentFixture<RxjsEpisodeTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEpisodeTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEpisodeTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
