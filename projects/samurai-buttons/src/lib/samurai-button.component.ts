import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class SamuraiButtonsComponent implements OnInit, AfterViewInit {
	@ViewChild('BUTTON') button!: HTMLButtonElement;

	@Input() preDefinedButton: 'PRIMARY' | 'ACCENT' | 'SUCCESS' | 'WARNING' | 'DANGER' = 'PRIMARY';

	@Input() config = new SamuraiButtonConfig();
	@Input() customConfig = new SamuraiButtonsCustomConfig();

	@Input() variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED';
	@Input() content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
	@Input() hoverStyle: 'LEFT_TO_RIGHT' | 'DOOR' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE' = 'LEFT_TO_RIGHT';
	@Input() borderAngle: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL';
	@Input() state: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' = 'ENABLED';

	@Input() id: string = '1';
	@Input() text: string = 'Samurai';
	@Input() icon: string = 'favorite';
	@Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'round';

	@Input() color: string = '#000';
	@Input() backgroundColor: string = 'orange';
	@Input() shadowColor: string = 'orange';
	@Input() hoverColor: string = '#666';
	@Input() direction: string = 'ltr';
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

	private getClass(): any {
		switch (this.hoverStyle) {
			case 'LEFT_TO_RIGHT':
				return 'left-to-right';

			case 'SHUTTER_UP':
				return 'shutter-up';

			case 'SHUTTER_DOWN':
				return 'shutter-down';
		}
	}

	public setStyle(button: HTMLButtonElement): void {
		switch (this.hoverStyle) {
			case 'DOOR':
				button.style.boxShadow = `inset -10.5em 0 0 0 ${this.hoverColor}, inset 10.5em 0 0 0 ${this.hoverColor}`;
				button.style.color = this.backgroundColor;
				break;

			case 'GLOW':
				button.style.boxShadow = `0 0 5px ${this.shadowColor}, 0 0 25px ${this.shadowColor}`;
				button.style.transform = `scale(110%)`;
				break;

			case 'NEON_BORDER':
				button.style.filter = `drop-shadow(0 0 8px ${this.borderColor})`;
				break;

			case 'FILL':
				button.style.color = this.hoverColor;
				button.style.backgroundColor = this.borderColor;
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

			case 'NEON_BORDER':
				button.style.filter = '';
				break;

			case 'FILL':
				button.style.color = this.color;
				button.style.backgroundColor = `transparent`;
				break;
		}
	}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.button = document.querySelector(`#button-${this.id}`) as HTMLButtonElement;

		switch (this.state) {
			case 'ENABLED':
				switch (this.variation) {
					case 'FILLED':
						this.button.style.border = 'none';
						break;

					case 'OUTLINED':
						this.button.style.backgroundColor = 'transparent';
						break;

					case 'CONTENT_ONLY':
						this.button.style.border = 'none';
						this.button.style.backgroundColor = 'transparent';
						break;
				}
				break;

			case 'DISABLED':
				this.hoverStyle = 'NONE';
				break;

			case 'PENDING':
				break;

			case 'DONE':
				break;

			case 'FAILED':
				break;
		}

		switch (this.borderAngle) {
			case 'NORMAL':
				this.button.style.borderRadius = `${this.button.offsetHeight / 5}px`;
				break;

			case 'ROUND':
				this.button.style.borderRadius = `${this.button.offsetHeight / 2}px`;
				break;

			case 'SHARP':
				this.button.style.borderRadius = `${this.button.offsetHeight / 8}px`;
				break;
		}

		this.button.classList.add(this.getClass());
	}
}
