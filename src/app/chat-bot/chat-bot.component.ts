import { ChatService } from './../../services/chat-service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
})
export class ChatBotComponent implements AfterViewInit {
  @ViewChild('wrapperChat') wrapperChat?: ElementRef<HTMLElement>;

  constructor(private chatService: ChatService) {}

  private handleScrollToBottom() {
    this.chatService.chatMessagesSubject.pipe(delay(100)).subscribe(() => {
      if (!this.wrapperChat) return;
      const divScroll = this.wrapperChat.nativeElement
        .getElementsByClassName('mat-tab-body-content')
        .item(0);
      if (divScroll) divScroll.scrollTop = divScroll.scrollHeight;
    });
  }

  ngAfterViewInit(): void {
    this.handleScrollToBottom();
  }
}
