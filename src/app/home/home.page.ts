import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton, IonModal, IonContent } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  analyticsOutline,
  apps,
  calendar,
  home,
  people,
  person
} from 'ionicons/icons';

interface TabItem {
  tab: string;
  label: string;
  icon: string;
  route: string;
  id: string;
  isDocked?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    RouterLink,
    RouterLinkActive,
    IonButton,
    IonModal,
    IonContent
],
})
export class HomePage {

  readonly tabs = signal<TabItem[]>([
    {
      tab: 'dashboard',
      label: 'Dashboard',
      icon: 'home',
      route: '/home/dashboard',
      id: "dashboard",
      isDocked: true,
    },
    {
      tab: 'sales',
      label: 'Sales',
      icon: 'analytics-outline',
      route: '/sales',
      id: "sales",
      isDocked: true,
    },
    {
      tab: 'customers',
      label: 'Customers',
      icon: 'people',
      route: '/home/customers',
      id: "customers",
      isDocked: true
    },
    {
      tab: 'recovery',
      label: 'Recovery',
      icon: 'calendar',
      route: '/recovery',
      id: "recovery",
      isDocked: true
    },
    {
      tab: 'profile',
      label: 'Profile',
      icon: 'person',
      route: '/home/profile',
      id: "profile",
      isDocked: false
    },
    {
      tab: '',
      label: 'More',
      icon: 'apps',
      route: '',
      id: 'open-model',
      isDocked: true
    },
  ]);

  readonly MainNavigationItems = computed(() =>
    this.tabs().filter((item) => item.isDocked),
  );
  readonly navigationItems = computed(() =>
    this.tabs().filter((item) => item.id !== 'open-model'),
  );

  constructor() {
    addIcons({
      home,
      analyticsOutline,
      people,
      calendar,
      person,
      apps
    });
  }
}