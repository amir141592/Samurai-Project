import { Route } from '@angular/router';

export const routes: Route[] = [
	{ path: 'button', loadComponent: () => import('./button/buttons.component').then((c) => c.ButtonsComponent) },
	{ path: 'radial-menu', loadComponent: () => import('./radial-menu/radial-menu.component').then((c) => c.RadialMenuComponent) },
	{ path: 'paginator', loadComponent: () => import('./paginator/paginator.component').then((c) => c.PaginatorComponent) },
	{ path: '', redirectTo: '/button', pathMatch: 'full' },
];
