import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'ad-trades-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>('system');
  readonly isDark = signal(false);

  private readonly systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.systemTheme.addEventListener('change', (event) => {
      if (this.mode() === 'system') {
        this.applyPalette(event.matches);
      }
    });

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    this.setTheme(this.isThemeMode(savedTheme) ? savedTheme : 'system');
  }

  setTheme(mode: ThemeMode): void {
    this.mode.set(mode);
    localStorage.setItem(THEME_STORAGE_KEY, mode);
    this.applyPalette(mode === 'dark' || (mode === 'system' && this.systemTheme.matches));
  }

  private applyPalette(isDark: boolean): void {
    this.isDark.set(isDark);
    document.documentElement.classList.toggle('ion-palette-dark', isDark);
  }

  private isThemeMode(value: string | null): value is ThemeMode {
    return value === 'light' || value === 'dark' || value === 'system';
  }
}
