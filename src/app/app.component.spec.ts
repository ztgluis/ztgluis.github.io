import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { SettingsService } from './shared/services/settings.service';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let settingsServiceSpy: jasmine.SpyObj<SettingsService>;

    beforeEach(waitForAsync(() => {
        const spy = jasmine.createSpyObj('SettingsService', [
            'switchTheme',
            'setLayout',
            'getLayout'
        ]);

        TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                { provide: SettingsService, useValue: spy },
                { provide: APP_BASE_HREF, useValue: '/' },
                provideRouter([]),
                provideHttpClient(),
                provideNoopAnimations(),
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        settingsServiceSpy = TestBed.inject(SettingsService);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('switchTheme()', () => {
        it('should switch the theme', waitForAsync(() => {
            fixture.detectChanges();
            component.switchTheme();
            expect(settingsServiceSpy.switchTheme).toHaveBeenCalled();
        }));
    });
});
