import { OttonovaService } from './../../../../services/ottonova-server';
import { ChatService } from './../../../../services/chat-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { WidgetYesNoComponent } from './widget-yes-no.component';
import { OttonovaServiceMock } from 'src/test/mocks/OttonovaServiceMock';

describe('WidgetYesNoComponent', () => {
  let component: WidgetYesNoComponent;
  let fixture: ComponentFixture<WidgetYesNoComponent>;

  let mockRouter = {
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };
  let mockChatService = {
    clearChat: jasmine.createSpy('clearChat'),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetYesNoComponent],
      providers: [
        WidgetYesNoComponent,
        { provide: Router, useValue: mockRouter },
        { provide: ChatService, useValue: mockChatService },
        { provide: OttonovaService, useClass: OttonovaServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYesNoComponent);
    component = fixture.componentInstance;
    component.data = ['Yes', 'No'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear Chat and navigate to login if click yes', () => {
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const button = divElement.getElementsByTagName('button').item(0);
    button?.click();
    fixture.detectChanges();
    expect(mockChatService.clearChat).toHaveBeenCalledOnceWith();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledOnceWith('/login');
  });

  it('should show start question ', () => {
    const divElement: HTMLElement = fixture.nativeElement;
    const pElement = divElement.getElementsByTagName('p').item(0);
    expect(pElement?.textContent).toBe(
      'Would you like to close this conversations?'
    );
  });

  it('should show message enjoy our chat bot if click no', () => {
    fixture.detectChanges();
    const divElement: HTMLElement = fixture.nativeElement;
    const button = divElement.getElementsByTagName('button').item(1);
    button?.click();
    fixture.detectChanges();
    const pElement = divElement.getElementsByTagName('p').item(0);
    expect(pElement?.textContent).toBe('Ok, enjoy with our ottonova bot!');
  });
});
