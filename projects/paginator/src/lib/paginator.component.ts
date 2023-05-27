import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiPaginatorConfig } from './config.class';

@Component({
	selector: 'samurai-paginator',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
	@Input() config?: SamuraiPaginatorConfig;

	@Input() id: string = '1';
	@Input() themeColor: string = '#000000';
	@Input() goToPage: boolean = false;
	@Input() itemsPerPage: string[] | 'Infinity' = ['5', '10', '20', '50', '100'];
	@Input() itemsPerPageOptions: string[] = [];
	@Input() totalItems: number = 0;
	@Input() fontFamily: string = 'initial';
	@Input() activePage?: number;

	@Output() $paged = new EventEmitter<{ activePage: number; startItemIndex: number; endItemIndex: number }>(true);
	@Output() $changeItemPerPage = new EventEmitter<string>(true);
	@Output() $goToPage = new EventEmitter<number>(true);
}
