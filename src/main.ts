import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routing';

function getBaseHref(platformLocation: PlatformLocation): string {
    return platformLocation.getBaseHrefFromDOM();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideAnimations(),
        provideHttpClient(),
        provideRouter(appRoutes),
        {
            provide: APP_BASE_HREF,
            useFactory: getBaseHref,
            deps: [PlatformLocation]
        }
    ]
}).catch(err => console.error(err));
