import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-rate',
  templateUrl: './widget-rate.component.html',
  styleUrls: ['./widget-rate.component.scss'],
})
export class WidgetRateComponent implements OnInit {
  @Input() data: number[] = [1, 5];
  public starRated = 0;
  public isDone = false;

  constructor() {}

  public setRate(rate: number) {
    if (this.isDone) return;

    if (this.starRated === rate) {
      this.starRated -= 1;
    } else {
      this.starRated = rate;
    }
  }

  public getArray() {
    return Array.from({ length: this.data[1] }, (v, i) => i + 1);
  }

  public done() {
    this.isDone = true;
  }

  ngOnInit(): void {}
}
