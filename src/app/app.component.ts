import { APP_BASE_HREF, AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { getAppNav } from '@app/app.routing';
import { SettingsService } from '@app/shared/services/settings.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
    selector: 'zgi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
]
})
export class AppComponent {
    mapsKey = environment.mapsKey;

    isGtXs$: Observable<boolean> = this.breakpointObserver
        .observe('(min-width: 600px)')
        .pipe(map(result => result.matches));

    navLinks = getAppNav();

    constructor(
        private settingsService: SettingsService,
        private breakpointObserver: BreakpointObserver,
        matIconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer,
        @Inject(APP_BASE_HREF) private baseHref: string
    ) {
        matIconRegistry.addSvgIcon(
            'github',
            domSanitizer.bypassSecurityTrustResourceUrl(
                `../${this.baseHref}/assets/img/github-circle-white-transparent.svg`
            )
        );
    }

    switchTheme() {
        this.settingsService.switchTheme();
    }
}
