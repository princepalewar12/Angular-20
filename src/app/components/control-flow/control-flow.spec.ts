import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFLow } from './control-flow';

describe('ControlFLow', () => {
  let component: ControlFLow;
  let fixture: ComponentFixture<ControlFLow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFLow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFLow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
