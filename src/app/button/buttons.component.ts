import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonsComponent } from 'projects/samurai-buttons/src/public-api';
import { SamuraiButtonConfig } from 'projects/samurai-buttons/src/lib/config.class';

@Component({
	selector: 'samurai-buttons',
	standalone: true,
	imports: [CommonModule, SamuraiButtonsComponent],
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
	config = new SamuraiButtonConfig('20', 'test config');

	btnAction = () => console.log('hello samurai');
}
