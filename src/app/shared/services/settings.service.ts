import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export const Themes = {
    default: 'default-theme.css',
    dark: 'dark-theme.css',
    custom: 'custom-theme.css'
};

export const StorageKeys = {
    theme: 'theme',
    layout: 'sidenav-layout'
};

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private document = inject(DOCUMENT);
    storageService = inject(StorageService);

    private readonly themeLink: HTMLLinkElement | null;
    private readonly defaultThemeHref: string;

    selectedTheme = Themes.default;

    constructor() {
        this.themeLink = this.document.querySelector('link[href*="-theme"]') as HTMLLinkElement | null;
        // Preserve the (potentially hashed) href injected by the build
        this.defaultThemeHref = this.themeLink?.getAttribute('href') ?? Themes.default;

        const stored = this.storageService.get(StorageKeys.theme);
        if (stored && stored !== Themes.default) {
            this.setTheme(stored);
        } else {
            this.selectedTheme = Themes.default;
        }
    }

    switchTheme(): void {
        switch (this.selectedTheme) {
            case Themes.default:
                this.setTheme(Themes.dark);
                break;
            case Themes.dark:
                this.setTheme(Themes.custom);
                break;
            default:
                this.setTheme(Themes.default);
        }
    }

    setTheme(theme: string): void {
        this.selectedTheme = theme;
        if (this.themeLink) {
            const href = theme === Themes.default ? this.defaultThemeHref : theme;
            this.themeLink.setAttribute('href', href);
        }
        this.storageService.set(StorageKeys.theme, theme);
    }

    setLayout(isDefault: boolean): void {
        this.storageService.set(StorageKeys.layout, isDefault);
    }

    getLayout(): string | null {
        return this.storageService.get(StorageKeys.layout);
    }
}
