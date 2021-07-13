import { Observable } from 'rxjs';
import { AuthService } from 'src/services/auth';
import {
  OttonovaCommand,
  OttonovaService,
} from './../../../services/ottonova-server';
import { ChatMessage } from './../components/chat-roll/chat-roll.component';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public message: string = '';
  public user: any = null;
  public widget$: Observable<Pick<OttonovaCommand, 'command'> | null> =
    new Observable();

  public messages: ChatMessage[] = [
    // { author: 'Lucas', message: 'Hi bot', type: 'client' },
    // { author: 'ottonova-bot', message: 'Hi  Client', type: 'bot' },
  ];

  constructor(
    private readonly ottonovaService: OttonovaService,
    private readonly authService: AuthService
  ) {}

  public sendMessage() {
    console.log('sendMessage', this.message);
    const userName = this.user ? this.user.username : 'Unknow User';
    this.messages.push({
      author: userName,
      message: this.message,
      type: 'client',
      origin: 'message',
    });
    this.ottonovaService.sendMessage({
      author: userName,
      message: this.message,
    });
    this.message = '';
  }

  public sendCommand() {
    this.ottonovaService.sendCommand();
  }

  private startListenMessage() {
    this.ottonovaService.getMessage().subscribe((message: any) => {
      this.messages.push({
        author: message.author,
        message: message.message,
        type: 'bot',
        origin: 'message',
      });
    });
  }

  private startListenCommand() {
    this.ottonovaService.getCommand().subscribe((value) => {
      this.messages.push({
        author: value.author,
        message: '',
        type: 'bot',
        origin: 'command',
        widget: { command: value.command },
      });
    });
  }

  ngOnInit(): void {
    this.startListenMessage();
    this.startListenCommand();
    this.authService.auth$.subscribe((user) => (this.user = user));
  }
}
