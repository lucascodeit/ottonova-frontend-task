import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth';

@Component({
  selector: 'app-widget-date',
  templateUrl: './widget-date.component.html',
  styleUrls: ['./widget-date.component.scss'],
})
export class WidgetDateComponent implements OnInit {
  @Input() data: string = '';

  private weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  public isDone: boolean = false;
  public dayChoose: string = '';
  public user: any = null;

  constructor(private readonly authService: AuthService) {}

  get isDoneMessage(): string {
    const userName = this.user ? this.user.username : 'Unknow User';
    return `${userName} selected ${this.dayChoose}`;
  }

  public clickDay(day: string) {
    this.isDone = true;
    this.dayChoose = day;
  }

  public getDayBtn() {
    try {
      const date = new Date(this.data);
      let day = date.getDay() - 1;
      const daysBtns = [];
      const circularMaxLimit = day + (this.weekDays.length - 1);
      for (let index = day; index <= circularMaxLimit; index++) {
        daysBtns.push(this.weekDays[index % this.weekDays.length]);
      }
      return daysBtns;
    } catch (e) {
      console.error('loadDate error', e);
      return [];
    }
  }

  ngOnInit() {
    this.authService.auth$.subscribe((user) => (this.user = user));
  }
}
