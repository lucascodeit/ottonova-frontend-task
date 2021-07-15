import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMapComponent } from './widget-map.component';

describe('WidgetMapComponent', () => {
  let component: WidgetMapComponent;
  let fixture: ComponentFixture<WidgetMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set marker right position in map', () => {
    component.data = { lat: 106500, lng: 529500 };
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(component.marker?.getPosition()?.lat()).toBe(component.data.lat);
    expect(component.marker?.getPosition()?.lng()).toBe(component.data.lng);
  });
});
