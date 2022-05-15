import { Component } from '@angular/core';
import { WebsocketService } from './app/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapbox2';
  constructor(private wsService: WebsocketService) { }
  }

