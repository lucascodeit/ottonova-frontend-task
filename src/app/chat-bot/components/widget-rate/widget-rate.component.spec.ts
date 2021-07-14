import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRateComponent } from './widget-rate.component';

describe('WidgetRateComponent', () => {
  let component: WidgetRateComponent;
  let fixture: ComponentFixture<WidgetRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetRateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Tap star x, x- should be fulled color  ', () => {
    const divElement: HTMLElement = fixture.nativeElement;
    const starsRate = divElement.getElementsByClassName('rate-start');
    const starRate1 = starsRate.item(0);
    const starRate2 = starsRate.item(1);
    const starRate3 = starsRate.item(2);
    const starRate4 = starsRate.item(3);
    component.setRate(3);
    fixture.detectChanges();
    const start4iSFulled = starRate4?.classList.contains('-isFull');
    expect(starRate1).toHaveClass('-isFull');
    expect(starRate2).toHaveClass('-isFull');
    expect(starRate3).toHaveClass('-isFull');
    expect(start4iSFulled).toBeFalse();
  });

  it('When tap done button, the content text should change to thanks', () => {
    const divElement: HTMLElement = fixture.nativeElement;
    const buttonElement = divElement.getElementsByTagName('button').item(0);
    component.setRate(3);
    expect(buttonElement?.textContent).toBe(' Done ');
    buttonElement?.click();
    fixture.detectChanges();
    expect(buttonElement?.textContent).toBe(' Thanks! ');
  });

  it('After click in Done, should not allow rate again', () => {
    const divElement: HTMLElement = fixture.nativeElement;
    const buttonElement = divElement.getElementsByTagName('button').item(0);
    component.setRate(3);
    expect(buttonElement?.textContent).toBe(' Done ');
    buttonElement?.click();
    component.setRate(2);
    expect(component.starRated).toBe(3);
  });
});
