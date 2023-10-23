import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiButtonDirective } from 'projects/button/src/public-api';

@Component({
  selector: 'samurai-buttons',
  standalone: true,
  imports: [CommonModule, SamuraiButtonDirective],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  btnAction = () => console.log('Hello Atlas');
}
