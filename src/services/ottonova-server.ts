import { ChatMessage } from './../app/chat-bot/components/chat-roll/chat-roll.component';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export type OttonovaCommandType = 'map' | 'date' | 'rate' | 'complete' | null;

export type OttonovaCommand = {
  author: string;
  command: {
    type: OttonovaCommandType;
    data: any;
  };
};

type OttonovaMessage = {
  author: string;
  message: string;
};

@Injectable()
export class OttonovaService {
  static KEY_MESSAGE = 'message';
  static KEY_COMMAND = 'command';

  constructor(private socket: Socket) {}

  sendMessage(msg: Pick<ChatMessage, 'author' | 'message'>) {
    this.socket.emit(OttonovaService.KEY_MESSAGE, msg);
  }

  getMessage() {
    return this.socket.fromEvent<OttonovaMessage>(OttonovaService.KEY_MESSAGE);
  }

  sendCommand() {
    this.socket.emit(OttonovaService.KEY_COMMAND);
  }

  getCommand() {
    return this.socket.fromEvent<OttonovaCommand>(OttonovaService.KEY_COMMAND);
  }
}
