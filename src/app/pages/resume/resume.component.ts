import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResumeService } from './resume.service';

@Component({
    selector: 'zgi-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss'],
    standalone: true,
    imports: [
    AsyncPipe,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule
]
})
export class ResumeComponent implements OnInit {
    // Loading indicator
    loading: boolean;

    // Open sidenav
    sidenavOpen: boolean;

    isGtSm$: Observable<boolean> = this.breakpointObserver
        .observe('(min-width: 960px)')
        .pipe(map(result => result.matches));

    sections: Observable<any>;

    constructor(
        private breakpointObserver: BreakpointObserver,
        public resumeService: ResumeService
    ) {}

    ngOnInit() {
        this.sections = this.resumeService.getSections();
    }
}
