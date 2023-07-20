import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiPaginatorComponent } from 'projects/paginator/src/public-api';

@Component({
	selector: 'samurai-paginators',
	standalone: true,
	imports: [CommonModule, SamuraiPaginatorComponent],
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {}
