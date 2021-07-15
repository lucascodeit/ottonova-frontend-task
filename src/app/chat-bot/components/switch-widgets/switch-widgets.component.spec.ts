import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OttonovaCommand } from 'src/services/ottonova-server';

import { SwitchWidgetsComponent } from './switch-widgets.component';

describe('SwitchWidgetsComponent', () => {
  let component: SwitchWidgetsComponent;
  let fixture: ComponentFixture<SwitchWidgetsComponent>;

  type CommandType = Pick<OttonovaCommand, 'command'>;

  const commandDate: CommandType = {
    command: { type: 'date', data: '2021-07-15T00:26:07.396Z' },
  };
  const commandComplete: CommandType = {
    command: { type: 'complete', data: ['Yes', 'No'] },
  };
  const commandRate: CommandType = { command: { type: 'rate', data: [1, 5] } };
  const commandMap: CommandType = {
    command: {
      type: 'map',
      data: {
        lat: 48.1482933,
        lng: 11.586628,
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchWidgetsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render widget-date when the type is "date"', () => {
    component.widget = commandDate;
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const appWidgetDate = divElement
      .getElementsByTagName('app-widget-date')
      .item(0);
    expect(appWidgetDate).toBeTruthy();
  });

  it('should render widget-yes-no when the type is "complete"', () => {
    component.widget = commandComplete;
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const appWidgetDate = divElement
      .getElementsByTagName('app-widget-yes-no')
      .item(0);
    expect(appWidgetDate).toBeTruthy();
  });

  it('should render widget-rate when the type is "rate"', () => {
    component.widget = commandRate;
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const appWidgetDate = divElement
      .getElementsByTagName('app-widget-rate')
      .item(0);
    expect(appWidgetDate).toBeTruthy();
  });

  it('should render widget-map when the type is "map"', () => {
    component.widget = commandMap;
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const appWidgetDate = divElement
      .getElementsByTagName('app-widget-map')
      .item(0);
    expect(appWidgetDate).toBeTruthy();
  });
});
