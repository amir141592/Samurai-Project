import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonsComponent } from 'projects/samurai-buttons/src/public-api';

@Component({
	selector: 'samurai-buttons',
	standalone: true,
	imports: [CommonModule, SamuraiButtonsComponent],
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {}
