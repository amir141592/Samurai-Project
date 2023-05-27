import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiRadialMenuComponent } from 'projects/samurai-radial-menu/src/public-api';

@Component({
	selector: 'samurai-radial-menus',
	standalone: true,
	imports: [CommonModule, SamuraiRadialMenuComponent],
	templateUrl: './radial-menu.component.html',
	styleUrls: ['./radial-menu.component.scss'],
})
export class RadialMenuComponent {}
