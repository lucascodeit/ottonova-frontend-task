import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRateComponent } from './widget-rate.component';

describe('WidgetRateComponent', () => {
  let component: WidgetRateComponent;
  let fixture: ComponentFixture<WidgetRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
