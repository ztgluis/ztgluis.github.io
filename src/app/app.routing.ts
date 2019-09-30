import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavItem, RouteData } from '@app/app.model';

/**
 * * `path` is required
 * * `data` is optional but if present must conform to `RouteData` contract
 */
interface CustomRoute extends Route {
    path: string;
    data?: RouteData;
}

export const appRoutes: CustomRoute[] = [
    {
        path: '',
        redirectTo: 'resume',
        pathMatch: 'full'
    },
    {
        path: 'resume',
        loadChildren: () =>
            import('./pages/resume/resume.module').then(m => m.ResumeModule),
        data: {
            title: 'Resume Page',
            name: 'Resume',
            icon: 'info'
        }
    }
];

/**
 * Iterates over module routes and returns navigation menu items
 * @param routes Array of `CustomRoute` objects to generate nav menus for.
 */
export function getAppNav(): NavItem[] {
    const routes: CustomRoute[] = appRoutes;
    return routes.reduce((acc: NavItem[], route: CustomRoute) => {
        if (route.data) {
            acc.push({
                path: route.path,
                icon: route.data.icon,
                name: route.data.name
            });
        }
        return acc;
    }, []);
}

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class RoutingModule {}
