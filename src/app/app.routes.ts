import { Route } from '@angular/router';

export const routes: Route[] = [
	{ path: 'button', loadComponent: () => import('./button/buttons.component').then((c) => c.ButtonsComponent) },
	{ path: '', redirectTo: '/button', pathMatch: 'full' },
];
