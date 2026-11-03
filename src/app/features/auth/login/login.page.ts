import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonText, IonImg, IonToggle } from '@ionic/angular';
import {
  NgxNeonUnderlineComponent
} from '@omnedia/ngx-neon-underline';
  import { NgxBorderBeamComponent } from '@omnedia/ngx-border-beam';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    IonText,
    FormsModule,
    IonImg,
    NgxBorderBeamComponent,
    IonIcon
],
})
export class LoginPage {
  email = '';
  password = '';

  isDarkMode = signal(true);

  toggleTheme(isDark: boolean) {
    this.isDarkMode.set(isDark);

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      isDark
    );
  }

  ngOnInit() {
    this.toggleTheme(this.isDarkMode());
  }
}


