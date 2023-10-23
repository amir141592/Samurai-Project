import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './button/buttons.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'samurai-root',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SAMURAI UI';
}
