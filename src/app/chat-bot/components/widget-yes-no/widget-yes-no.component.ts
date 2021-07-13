import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget-yes-no',
  templateUrl: './widget-yes-no.component.html',
  styleUrls: ['./widget-yes-no.component.scss'],
})
export class WidgetYesNoComponent implements OnInit {
  @Input() data: string[] = [];
  public isDone = false;

  constructor(private router: Router) {}

  public btnAction(btn: string) {
    this.isDone = true;
    if (btn === 'Yes') {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {}
}
