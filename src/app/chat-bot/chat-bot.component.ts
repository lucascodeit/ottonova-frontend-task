import { ChatService } from './../../services/chat-service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
})
export class ChatBotComponent implements AfterViewInit, OnDestroy {
  @ViewChild('wrapperChat') wrapperChat?: ElementRef<HTMLElement>;

  private chatMessageSubscription: Subscription = new Subscription();

  constructor(private chatService: ChatService) {}

  private handleScrollToBottom() {
    this.chatMessageSubscription = this.chatService.chatMessagesSubject
      .pipe(delay(100))
      .subscribe(() => {
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

  ngOnDestroy() {
    this.chatMessageSubscription.unsubscribe();
  }
}
