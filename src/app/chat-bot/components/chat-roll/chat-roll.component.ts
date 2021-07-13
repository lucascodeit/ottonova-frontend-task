import { Component, Input, OnInit } from '@angular/core';
import { OttonovaCommand } from 'src/services/ottonova-server';

export type ChatMessage = {
  author: string;
  message: string;
  type: 'bot' | 'client';
  origin: 'message' | 'command';
  widget?: Pick<OttonovaCommand, 'command'>;
};

@Component({
  selector: 'app-chat-roll',
  templateUrl: './chat-roll.component.html',
  styleUrls: ['./chat-roll.component.scss'],
})
export class ChatRollComponent implements OnInit {
  @Input() messagesRoll: ChatMessage[] = [];

  constructor() {}

  ngOnInit(): void {}
}
