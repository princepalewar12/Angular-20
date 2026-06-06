import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEpisodeFour } from './rxjs-episode-four';

describe('RxjsEpisodeFour', () => {
  let component: RxjsEpisodeFour;
  let fixture: ComponentFixture<RxjsEpisodeFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsEpisodeFour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsEpisodeFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
