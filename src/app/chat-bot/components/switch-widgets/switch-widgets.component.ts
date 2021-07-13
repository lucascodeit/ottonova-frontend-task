import { OttonovaCommand } from './../../../../services/ottonova-server';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-widgets',
  templateUrl: './switch-widgets.component.html',
  styleUrls: ['./switch-widgets.component.scss'],
})
export class SwitchWidgetsComponent implements OnInit {
  @Input() widget: Pick<OttonovaCommand, 'command'> | null = null;

  constructor() {}

  public getWidgetData() {
    if (!this.widget) {
      return null;
    }
    const {
      command: { data },
    } = this.widget;
    return data;
  }

  public getWidgetType() {
    if (!this.widget) {
      return '';
    }
    const {
      command: { type },
    } = this.widget;
    return type;
  }

  ngOnInit(): void {
    // this.widget = {
    //   command: { type: 'date', data: '2021-07-13T15:18:01.583Z' },
    // };
  }
}
