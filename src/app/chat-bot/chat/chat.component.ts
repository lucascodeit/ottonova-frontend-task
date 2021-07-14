import { ChatService } from './../../../services/chat-service';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from 'src/services/auth';
import { OttonovaCommand } from './../../../services/ottonova-server';
import { ChatMessage } from './../components/chat-roll/chat-roll.component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  public message: string = '';
  public user: any = null;
  public widget$: Observable<Pick<OttonovaCommand, 'command'> | null> =
    new Observable();

  public messages$ = of<ChatMessage[]>([]);
  private authUnsubscribe: Subscription;

  constructor(
    private readonly chatService: ChatService,
    private readonly authService: AuthService
  ) {
    this.authUnsubscribe = this.authService.auth$.subscribe(
      (user) => (this.user = user)
    );
  }

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
    this.messages$ = this.chatService.chatMessagesSubject;
  }

  ngOnDestroy() {
    this.authUnsubscribe.unsubscribe();
  }
}
