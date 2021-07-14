import { OttonovaService } from './../../services/ottonova-server';
import { ChatService } from './../../services/chat-service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotComponent } from './chat-bot.component';
import { OttonovaServiceMock } from 'src/test/mocks/OttonovaServiceMock';

describe('ChatBotComponent', () => {
  let component: ChatBotComponent;
  let fixture: ComponentFixture<ChatBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatBotComponent],
      providers: [
        ChatBotComponent,
        { provide: ChatService },
        { provide: OttonovaService, useClass: OttonovaServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
