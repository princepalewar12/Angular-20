import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEpisodeFive } from './rxjs-episode-five';

describe('RxjsEpisodeFive', () => {
  let component: RxjsEpisodeFive;
  let fixture: ComponentFixture<RxjsEpisodeFive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEpisodeFive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEpisodeFive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
