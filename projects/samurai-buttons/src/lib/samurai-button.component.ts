import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonConfig } from './config.class';
import { SamuraiButtonsCustomConfig } from './custom-config.class';

@Component({
	selector: 'samurai-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './samurai-button.component.html',
	styleUrls: ['./samurai-button.component.scss'],
})
export class SamuraiButtonsComponent {
	@Input() preDefinedButton: 'PRIMARY' | 'ACCENT' | 'SUCCESS' | 'WARNING' | 'DANGER' = 'PRIMARY';

	@Input() config = new SamuraiButtonConfig();
	@Input() customConfig = new SamuraiButtonsCustomConfig();

	@Input() id: string = '1';
	@Input() state: 'ENABLED' | 'DISABLED' = 'ENABLED';
	@Input() variation: 'TEXT' | 'ICON' | 'TEXT-ICON' = 'TEXT';
	@Input() style: 'NORMAL' | 'ROUND' | 'SHARP' | 'NONE' = 'NORMAL';
	@Input() hoverStyle: 'LEFT_TO_RIGHT' | 'DOOR' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'SHINE' | 'NEON_BORDER' | 'FILL' = 'SHINE';
	@Input() text: string = 'Samurai';
	@Input() icon: string = 'favorite';
	@Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'round';
	@Input() color: string = '#000';
	@Input() backgroundColor: string = '#fff';
	@Input() shadowColor: string = '#666';
	@Input() width: string = 'fit-content';
	@Input() height: string = 'fit-content';
	@Input() borderWidth: string = '2px';
	@Input() borderStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' = 'solid';
	@Input() borderColor: string = '#000';
	@Input() borderRadius: string = '8px';
	@Input() padding: string = '8px 16px';
	@Input() fontStyle: string = 'normal';
	@Input() fontVariant: string = 'normal';
	@Input() fontWeight: string = '500';
	@Input() fontSize: string = '24px';
	@Input() fontFamily: string = 'initial';

	@Output() $btnClick = new EventEmitter<string>(false);

	public setStyle(button: HTMLButtonElement): void {
		switch (this.hoverStyle) {
			case 'DOOR':
				button.style.boxShadow = `inset -10.5em 0 0 0 ${this.shadowColor}, inset 10.5em 0 0 0 ${this.shadowColor}`;
				button.style.color = this.backgroundColor;
				break;

			case 'GLOW':
				button.style.boxShadow = `0 0 5px ${this.shadowColor}, 0 0 25px ${this.shadowColor}, 0 0 50px ${this.shadowColor}, 0 0 200px ${this.shadowColor}`;
				button.style.transform = `scale(110%)`;
				break;
		}
	}

	public removeStyle(button: HTMLButtonElement): void {
		switch (this.hoverStyle) {
			case 'DOOR':
				button.style.boxShadow = ``;
				button.style.color = this.color;
				break;

			case 'GLOW':
				button.style.boxShadow = ``;
				button.style.transform = `scale(100%)`;
				break;
		}
	}

	public getClass(button: HTMLButtonElement): string {
		switch (this.hoverStyle) {
			case 'LEFT_TO_RIGHT':
				return 'left-to-right';

			case 'SHUTTER_UP':
				return 'shutter-up';

			case 'SHUTTER_DOWN':
				return 'shutter-down';

			default:
				return '';
		}
	}
}
