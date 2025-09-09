import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    console.log({
      clientId: '8315944344732576',
      clientSecret: 'rAsZB2GwlsivbGp4GE5CANWw0ulMTizu',
    });
  }
}
