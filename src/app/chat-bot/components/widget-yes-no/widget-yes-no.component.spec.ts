import { OttonovaService } from './../../../../services/ottonova-server';
import { ChatService } from './../../../../services/chat-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { WidgetYesNoComponent } from './widget-yes-no.component';
import { OttonovaServiceMock } from 'src/test/mocks/OttonovaServiceMock';

describe('WidgetYesNoComponent', () => {
  let component: WidgetYesNoComponent;
  let fixture: ComponentFixture<WidgetYesNoComponent>;

  beforeEach(async () => {
    let mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };
    await TestBed.configureTestingModule({
      declarations: [WidgetYesNoComponent],
      providers: [
        WidgetYesNoComponent,
        { provide: Router, useValue: mockRouter },
        { provide: ChatService },
        { provide: OttonovaService, useClass: OttonovaServiceMock },
      ],
    }).compileComponents();
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
