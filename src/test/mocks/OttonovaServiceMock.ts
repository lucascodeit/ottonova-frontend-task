import { of } from 'rxjs';
import { ChatMessage } from './../../app/chat-bot/components/chat-roll/chat-roll.component';
export class OttonovaServiceMock {
  sendMessage(msg: Pick<ChatMessage, 'author' | 'message'>) {}

  getMessage() {
    return of('');
  }

  sendCommand() {}

  getCommand() {
    return of('');
  }
}
