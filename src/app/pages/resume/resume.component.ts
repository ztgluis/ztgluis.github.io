import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
@Component({
    selector: 'zgi-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
    // Loading indicator
    loading: boolean;

    // Open sidenav
    sidenavOpen: boolean;

    mediaObserver$: Observable<
        MediaChange[]
    > = this.mediaObserver.asObservable();

    workExperience = [
        {
            company: 'Capital One',
            title: 'Manager, Master Software Engineer',
            description: `
            * People Manager for a software engineering team of 5 developers.
            * Individual Contributor leading the decomposition of monolithic application into micro-service architecture, automated the CI/CD processes and management of AWS resources.
            * Partner with Product Owner, external teams and stakeholders to prioritize and schedule feature releases.
            `
        }
    ];

    constructor(public mediaObserver: MediaObserver) {}
}
