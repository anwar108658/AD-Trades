import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonText, IonImg } from '@ionic/angular';
import { ThemeService } from '../../../core/theme.service';
import { AuthService } from '../../../core/services/auth/auth-service';
import { NotificationService } from '../../../core/services/notification/notification-service';
import { Router } from '@angular/router';

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
  message = signal<string>('');
  notification = inject(NotificationService);
  router = inject(Router);

  authService = inject(AuthService)

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    // this.LoginAccount('anwar108658@gmail.com','!@#$%^&*');
  }

  isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  toggleTheme(isDark: boolean) {
    this.themeService.setTheme(isDark ? 'dark' : 'light');
  }

  async LoginAccount(email:string, password:string) {
    try {
      const session = await this.authService.login({email,password});
      console.log('Login successful:', session);
      await this.notification.success('Login successful');
      this.router.navigateByUrl('/home', { replaceUrl: true })
    } catch (error:any) {
        await this.notification.error(error?.message || 'Login failed');
      console.error('Login failed:', error?.message);
    }
  }
}

