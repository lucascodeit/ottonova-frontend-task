import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDateComponent } from './widget-date.component';

describe('WidgetDateComponent', () => {
  let component: WidgetDateComponent;
  let fixture: ComponentFixture<WidgetDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetDateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render week days given a date starting with day of date', () => {
    component.data = '2021-07-15T00:26:07.396Z';
    const daysBtn = component.getDayBtn();
    expect(daysBtn).toEqual([
      'Wednesday',
      'Thursday',
      'Friday',
      'Monday',
      'Tuesday',
    ]);
  });
});
