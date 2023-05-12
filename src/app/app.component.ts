import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonsComponent } from 'projects/samurai-buttons/src/public-api';

@Component({
	selector: 'samurai-root',
	standalone: true,
	imports: [CommonModule, SamuraiButtonsComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'samurai-UI';
}
