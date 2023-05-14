import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './button/buttons.component';

@Component({
	selector: 'samurai-root',
	standalone: true,
	imports: [CommonModule, ButtonsComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'SAMURAI-UI';
}
