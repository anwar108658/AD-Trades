import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertButton, IonAlert, IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar, IonLabel, IonItem, IonSelect, IonSelectOption, IonBadge, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonList, IonCardContent, IonAvatar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  callOutline,
  chevronForwardOutline,
  colorPaletteOutline,
  createOutline,
  informationCircleOutline,
  lockClosedOutline,
  logOutOutline,
  mailOutline,
  peopleOutline,
  shieldCheckmarkOutline,
  syncOutline,
} from 'ionicons/icons';
import { ThemeMode, ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonBadge,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonList,
    IonCardContent,
    IonAvatar
],
})
export class ProfilePage {
  readonly name = 'Sophia Bennett';
  readonly initials = 'SB';
  readonly role = 'Administrator';
  readonly phone = '+1 (608) 555-0142';
  readonly email = 'sophia.bennett@adtrade.com';
  readonly isAdmin = true;
  readonly lastSynced = 'Today, 9:42 AM';

  selectedTheme: ThemeMode;
  isLogoutAlertOpen = false;

  readonly logoutAlertButtons: AlertButton[] = [
    { text: 'Cancel', role: 'cancel' },
    { text: 'Log out', role: 'destructive', handler: () => this.router.navigateByUrl('/login') },
  ];

  constructor(
    private readonly router: Router,
    private readonly themeService: ThemeService,
  ) {
    this.selectedTheme = this.themeService.mode();
    addIcons({
      callOutline,
      chevronForwardOutline,
      colorPaletteOutline,
      createOutline,
      informationCircleOutline,
      lockClosedOutline,
      logOutOutline,
      mailOutline,
      peopleOutline,
      shieldCheckmarkOutline,
      syncOutline,
    });
  }

  applyTheme(theme: ThemeMode): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }
}
