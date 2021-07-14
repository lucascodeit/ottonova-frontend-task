import { ChatService } from './../../../services/chat-service';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/services/auth';
import { OttonovaCommand } from './../../../services/ottonova-server';
import { ChatMessage } from './../components/chat-roll/chat-roll.component';
import { Component, OnInit } from '@angular/core';

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

  public messages$ = of<ChatMessage[]>([]);

  constructor(
    private readonly chatService: ChatService,
    private readonly authService: AuthService
  ) {}

  public sendMessage() {
    if (!this.message) return;
    const userName = this.user ? this.user.username : 'Unknow User';
    this.chatService.sendMessage(this.message, userName);
    this.message = '';
  }

  public sendCommand() {
    this.chatService.sendCommand();
  }

  ngOnInit(): void {
    this.authService.auth$.subscribe((user) => (this.user = user));
    this.messages$ = this.chatService.chatMessagesSubject;
  }
}
