import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';
import { ResumeComponent } from './resume.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: ResumeComponent
            }
        ])
    ],
    declarations: [ResumeComponent]
})
export class ResumeModule {}
