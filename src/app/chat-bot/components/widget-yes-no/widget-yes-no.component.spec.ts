import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetYesNoComponent } from './widget-yes-no.component';

describe('WidgetYesNoComponent', () => {
  let component: WidgetYesNoComponent;
  let fixture: ComponentFixture<WidgetYesNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetYesNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
