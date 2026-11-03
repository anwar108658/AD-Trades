import { Component } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { eye, lockClosed,mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class HomePage {
  constructor() {

    addIcons({ eye, lockClosed, mailOutline });
  }
}
