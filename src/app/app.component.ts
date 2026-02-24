import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    isGtXs$: Observable<boolean> = this.breakpointObserver
        .observe('(min-width: 600px)')
        .pipe(map(result => result.matches));

    navLinks = getAppNav();

    constructor(
        private settingsService: SettingsService,
        private breakpointObserver: BreakpointObserver,
        matIconRegistry: MatIconRegistry,
        domSanitizer: DomSanitizer
    ) {
        matIconRegistry.addSvgIcon(
            'github',
            domSanitizer.bypassSecurityTrustResourceUrl(
                'assets/img/github-circle-white-transparent.svg'
            )
        );
    }

    switchTheme() {
        this.settingsService.switchTheme();
    }
}
