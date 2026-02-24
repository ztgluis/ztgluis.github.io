import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
import { map } from 'rxjs/operators';

@Component({
    selector: 'zgi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        RouterLink,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
    ]
})
export class AppComponent {
    private settingsService = inject(SettingsService);

    isGtXs = toSignal(
        inject(BreakpointObserver)
            .observe('(min-width: 600px)')
            .pipe(map(result => result.matches)),
        { initialValue: false }
    );

    navLinks = getAppNav();

    constructor() {
        inject(MatIconRegistry).addSvgIcon(
            'github',
            inject(DomSanitizer).bypassSecurityTrustResourceUrl(
                'assets/img/github-circle-white-transparent.svg'
            )
        );
    }

    switchTheme(): void {
        this.settingsService.switchTheme();
    }
}
