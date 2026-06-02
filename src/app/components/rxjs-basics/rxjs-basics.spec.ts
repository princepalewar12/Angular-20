import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBasics } from './rxjs-basics';

describe('RxjsBasics', () => {
  let component: RxjsBasics;
  let fixture: ComponentFixture<RxjsBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsBasics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
