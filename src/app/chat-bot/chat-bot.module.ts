import { ChatService } from './../../services/chat-service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { ChatBotRoutingModule } from './chat-bot-routing.module';
import { ChatBotComponent } from './chat-bot.component';
import { ChatComponent } from './chat/chat.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';
import { ChatRollComponent } from './components/chat-roll/chat-roll.component';
import { OttonovaService } from 'src/services/ottonova-server';
import { WidgetMapComponent } from './components/widget-map/widget-map.component';
import { SwitchWidgetsComponent } from './components/switch-widgets/switch-widgets.component';
import { WidgetYesNoComponent } from './components/widget-yes-no/widget-yes-no.component';
import { WidgetRateComponent } from './components/widget-rate/widget-rate.component';
import { WidgetDateComponent } from './components/widget-date/widget-date.component';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
  url: environment.ottonovaBotSocketUrl,
  options: {},
};

@NgModule({
  declarations: [
    ChatBotComponent,
    ChatComponent,
    ChatRollComponent,
    WidgetMapComponent,
    SwitchWidgetsComponent,
    WidgetYesNoComponent,
    WidgetRateComponent,
    WidgetDateComponent,
  ],
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [OttonovaService, ChatService],
})
export class ChatBotModule {}
