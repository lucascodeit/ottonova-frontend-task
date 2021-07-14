import { OttonovaService } from './ottonova-server';
import { ChatMessage } from './../app/chat-bot/components/chat-roll/chat-roll.component';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ChatService {
  public chatMessagesSubject: Subject<ChatMessage[]> = new Subject();
  private chatMessages: ChatMessage[] = [];

  constructor(private ottonovaService: OttonovaService) {
    this.chatMessagesSubject.next([]);
    this.startListenMessages();
    this.startListenCommand();
  }

  public sendMessage(message: string, author: string) {
    const messagePayload: ChatMessage = {
      author,
      message,
      type: 'client',
      origin: 'message',
    };
    this.ottonovaService.sendMessage({ message, author });
    this.chatMessages.push(messagePayload);
    this.emitChangeChat();
  }

  public sendCommand() {
    this.ottonovaService.sendCommand();
  }

  private startListenMessages() {
    this.ottonovaService.getMessage().subscribe((objMessage: any) => {
      const { author, message } = objMessage;
      this.chatMessages.push({
        author,
        message,
        type: 'bot',
        origin: 'message',
      });
      this.emitChangeChat();
    });
  }

  private startListenCommand() {
    this.ottonovaService.getCommand().subscribe((objWidget) => {
      const { author, command } = objWidget;
      this.chatMessages.push({
        author,
        message: '',
        type: 'bot',
        origin: 'command',
        widget: { command },
      });
      this.emitChangeChat();
    });
  }

  public clearChat() {
    this.chatMessages = [];
    this.emitChangeChat();
  }

  private emitChangeChat() {
    this.chatMessagesSubject.next(this.chatMessages);
  }
}
