import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonsConfig } from './config.class';
import { SamuraiButtonsCustomConfig } from './custom-config.class';

@Component({
	selector: 'samurai-button',
	standalone: true,
	imports: [CommonModule],
	template: `<button
		style="display: flex; justify-content: center; align-items: center;"
		[ngStyle]="{color, backgroundColor, width, height, borderWidth, borderStyle, borderColor, borderRadius, padding, fontStyle, fontVariant, fontWeight, fontSize, fontFamily}"
		(click)="$btnClick.emit(id)"
	>
		<span class="material-icons{{ iconStyle == 'filled' ? '' : '-' + iconStyle }}" style="padding-right: 4px">{{ icon }}</span>
		{{ text }}
	</button>`,
})
export class SamuraiButtonsComponent {
	@Input() config = new SamuraiButtonsConfig();
	@Input() customConfig = new SamuraiButtonsCustomConfig();

	@Input() id: string = '1';
	@Input() text: string = 'Samurai';
	@Input() icon: string = 'favorite';
	@Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'round';
	@Input() color: string = '#000';
	@Input() backgroundColor: string = '#fff';
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
}
