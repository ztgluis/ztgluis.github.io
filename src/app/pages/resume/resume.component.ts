import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { ResumeService } from './resume.service';

@Component({
    selector: 'zgi-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    // Loading indicator
    loading: boolean;

    // Open sidenav
    sidenavOpen: boolean;

    mediaObserver$: Observable<
        MediaChange[]
    > = this.mediaObserver.asObservable();

    sections: Observable<any>;

    constructor(
        public mediaObserver: MediaObserver,
        public resumeService: ResumeService
    ) {}

    ngOnInit() {
        this.sections = this.resumeService.getSections();
    }
}
