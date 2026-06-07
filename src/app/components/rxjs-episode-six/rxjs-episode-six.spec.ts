import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEpisodeSix } from './rxjs-episode-six';

describe('RxjsEpisodeSix', () => {
  let component: RxjsEpisodeSix;
  let fixture: ComponentFixture<RxjsEpisodeSix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEpisodeSix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEpisodeSix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
