import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonText, IonImg } from '@ionic/angular';
import { ThemeService } from '../../../core/theme.service';

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
    IonIcon
],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private readonly themeService: ThemeService) {}

  isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(isDark: boolean) {
    this.themeService.setTheme(isDark ? 'dark' : 'light');
  }
}

