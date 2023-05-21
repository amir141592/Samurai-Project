import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonConfig } from './config.class';
import { Subscription } from 'rxjs';

@Component({
	selector: 'samurai-button',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './samurai-button.component.html',
	styleUrls: ['./samurai-button.component.scss'],
})
export class SamuraiButtonsComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('BUTTON') button!: HTMLButtonElement;

	@Input() preStyled?:
		| 'PRIMARY_TEXT'
		| 'ACCENT_TEXT'
		| 'SUCCESS_TEXT'
		| 'WARNING_TEXT'
		| 'DANGER_TEXT'
		| 'PRIMARY_ICON'
		| 'ACCENT_ICON'
		| 'SUCCESS_ICON'
		| 'WARNING_ICON'
		| 'DANGER_ICON';

	@Input() config?: SamuraiButtonConfig;

	@Input() btnAction = () => console.log(`Button ${this.id} clicked`);

	@Input() variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED';
	@Input() content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
	@Input() hoverStyle: 'LEFT_TO_RIGHT' | 'BOTH_SIDES' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE' = 'NONE';
	@Input() borderAngle: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL';
	@Input() state: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' = 'ENABLED'; // ! not all states implemented yet

	@Input() id: string = '1';
	@Input() text: string = 'Samurai';
	@Input() icon: string = 'favorite';
	@Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'round';

	@Input() color: string = '#000';
	@Input() backgroundColor: string = '#fff';
	@Input() hoverColor: string = '#00f';
	@Input() shadowColor: string = '#fff';
	@Input() effectSpeed: 'FAST' | 'NORMAL' | 'SLOW' = 'NORMAL'; // ! not implemented yet
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

	private btnClick$: Subscription = this.$btnClick.subscribe(() => this.btnAction());

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
			case 'BOTH_SIDES':
				button.style.boxShadow = `inset -10.5em 0 0 0 ${this.hoverColor}, inset 10.5em 0 0 0 ${this.hoverColor}`;
				break;

			case 'GLOW':
				button.style.boxShadow = `0 0 5px ${this.backgroundColor}, 0 0 25px ${this.backgroundColor}`;
				button.style.transform = `scale(110%)`;
				break;

			case 'NEON_BORDER':
				button.style.filter = `drop-shadow(0 0 12px ${this.borderColor})`;
				break;

			case 'FILL':
				button.style.color = this.hoverColor;
				button.style.backgroundColor = this.borderColor;
				break;
		}
	}

	public removeStyle(button: HTMLButtonElement): void {
		switch (this.hoverStyle) {
			case 'BOTH_SIDES':
				button.style.boxShadow = ``;
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

	ngOnInit(): void {
		if (this.preStyled)
			switch (this.preStyled) {
				case 'PRIMARY_TEXT':
					this.backgroundColor = '#64B5F6';
					this.hoverStyle = 'LEFT_TO_RIGHT';
					this.hoverColor = '#2196F3';
					this.fontWeight = '700';
					break;

				case 'ACCENT_TEXT':
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#F6A564';
					this.borderColor = '#F6A564';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					this.fontWeight = '700';
					break;

				case 'SUCCESS_TEXT':
					this.backgroundColor = '#81C784';
					this.hoverStyle = 'LEFT_TO_RIGHT';
					this.hoverColor = '#4CAF50';
					this.fontWeight = '700';
					break;

				case 'WARNING_TEXT':
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#FFD54F';
					this.borderColor = '#FFD54F';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					this.fontWeight = '700';
					break;

				case 'DANGER_TEXT':
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#EF5350';
					this.borderColor = '#EF5350';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					this.fontWeight = '700';
					break;

				case 'PRIMARY_ICON':
					this.content = 'ICON';
					this.backgroundColor = '#64B5F6';
					this.hoverColor = '#2196F3';
					this.hoverStyle = 'GLOW';
					break;

				case 'ACCENT_ICON':
					this.content = 'ICON';
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#F6A564';
					this.borderColor = '#F6A564';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					break;

				case 'SUCCESS_ICON':
					this.content = 'ICON';
					this.backgroundColor = '#81C784';
					this.hoverColor = '#4CAF50';
					this.hoverStyle = 'GLOW';
					break;

				case 'WARNING_ICON':
					this.content = 'ICON';
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#FFD54F';
					this.borderColor = '#FFD54F';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					break;

				case 'DANGER_ICON':
					this.content = 'ICON';
					this.variation = 'OUTLINED';
					this.backgroundColor = 'transparent';
					this.color = '#EF5350';
					this.borderColor = '#EF5350';
					this.hoverStyle = 'FILL';
					this.hoverColor = '#000';
					break;
			}

		if (this.config)
			for (const key in this.config)
				switch (key) {
					case 'id':
						this.id = this.config[key];
						break;

					case 'text':
						this.text = this.config[key];
						break;

					case 'variation':
						this.variation = this.config[key];
						break;

					case 'content':
						this.content = this.config[key];
						break;

					case 'hoverStyle':
						this.hoverStyle = this.config[key];
						break;

					case 'borderAngle':
						this.borderAngle = this.config[key];
						break;

					case 'state':
						this.state = this.config[key];
						break;

					case 'icon':
						this.icon = this.config[key];
						break;

					case 'iconStyle':
						this.iconStyle = this.config[key];
						break;

					case 'color':
						this.color = this.config[key];
						break;

					case 'backgroundColor':
						this.backgroundColor = this.config[key];
						break;

					case 'hoverColor':
						this.hoverColor = this.config[key];
						break;

					case 'fontSize':
						this.fontSize = this.config[key];
						break;

					case 'fontFamily':
						this.fontFamily = this.config[key];
						break;
				}
	}

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
						this.button.classList.add('text-underline');
						break;
				}
				break;

			case 'DISABLED':
				this.hoverStyle = 'NONE';
				this.button.style.cursor = 'not-allowed';
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
				this.button.style.borderRadius = `${this.button.offsetHeight / 10}px`;
				break;
		}

		switch (this.content) {
			case 'ICON':
				this.button.style.padding = '8px';
				break;
		}

		this.button.classList.add(this.getClass());
	}

	ngOnDestroy(): void {
		this.btnClick$?.unsubscribe();
	}
}
