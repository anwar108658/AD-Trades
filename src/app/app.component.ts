import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed, lockClosedOutline, mailOutline } from 'ionicons/icons';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    inject(ThemeService);
    addIcons({ eye, lockClosedOutline, mailOutline });
  }
}
