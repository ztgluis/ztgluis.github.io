import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs/operators';
import { ResumeService } from './resume.service';

@Component({
    selector: 'zgi-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatIconModule,
    ]
})
export class ResumeComponent {
    isGtSm = toSignal(
        inject(BreakpointObserver)
            .observe('(min-width: 960px)')
            .pipe(map(result => result.matches)),
        { initialValue: false }
    );

    sections = toSignal(inject(ResumeService).getSections());
}
