import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiMenuItem } from './samurai-menu-item.class';

@Component({
	selector: 'samurai-radial-menu',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './samurai-radial-menu.component.html',
	styleUrls: ['./samurai-radial-menu.component.scss'],
})
export class SamuraiRadialMenuComponent implements AfterViewInit {
	@ViewChild('MENU') menu!: HTMLCanvasElement;

	@Input() id: string = '1';
	@Input() menuItems: SamuraiMenuItem[] = [];
	@Input() animations: boolean = true;
	@Input() variation: 'BASIC' = 'BASIC'; // ? more variations will be added in future
	@Input() size: 'SMALL' | 'MEDIUM' | 'LARGE' = 'LARGE';
	@Input() content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
	@Input() hoverStyle: 'NONE' = 'NONE'; // ? more hover styles will be added in future
	@Input() state: 'ENABLED' | 'DISABLED' = 'ENABLED';
	@Input() badge: boolean = false;

	private level: number = 1;

	ngAfterViewInit(): void {
		this.menu = document.querySelector(`#radial-menu-${this.id}`) as HTMLCanvasElement;
	}
}
