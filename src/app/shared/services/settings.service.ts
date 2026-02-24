import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
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
    private readonly themeLink: HTMLLinkElement | null;
    private readonly defaultThemeHref: string;

    constructor(
        @Inject(DOCUMENT) private document: HTMLDocument,
        public storageService: StorageService
    ) {
        this.themeLink = this.document.querySelector('link[href*="-theme"]') as HTMLLinkElement | null;
        // Preserve the (potentially hashed) href injected by the build
        this.defaultThemeHref = this.themeLink?.getAttribute('href') || Themes.default;

        const stored = this.storageService.get(StorageKeys.theme);
        if (stored && stored !== Themes.default) {
            this.setTheme(stored);
        } else {
            this.selectedTheme = Themes.default;
        }
    }

    selectedTheme = Themes.default;

    switchTheme() {
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

    setTheme(theme: string) {
        this.selectedTheme = theme;
        if (this.themeLink) {
            const href = theme === Themes.default ? this.defaultThemeHref : theme;
            this.themeLink.setAttribute('href', href);
        }
        this.storageService.set(StorageKeys.theme, theme);
    }

    setLayout(isDefault) {
        this.storageService.set(StorageKeys.layout, isDefault);
    }

    getLayout() {
        return this.storageService.get(StorageKeys.layout);
    }
}
