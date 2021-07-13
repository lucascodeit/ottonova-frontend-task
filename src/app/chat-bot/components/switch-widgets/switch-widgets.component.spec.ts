import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchWidgetsComponent } from './switch-widgets.component';

describe('SwitchWidgetsComponent', () => {
  let component: SwitchWidgetsComponent;
  let fixture: ComponentFixture<SwitchWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
