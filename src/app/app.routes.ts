import { Route } from '@angular/router';

export const routes: Route[] = [
	{ path: 'button', loadComponent: () => import('./button/buttons.component').then((c) => c.ButtonsComponent) },
	{ path: 'radial-menu', loadComponent: () => import('./radial-menu/radial-menu.component').then((c) => c.RadialMenuComponent) },
	{ path: '', redirectTo: '/button', pathMatch: 'full' },
];
