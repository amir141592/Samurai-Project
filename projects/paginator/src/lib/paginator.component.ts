import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamuraiPaginatorConfig } from './config.class';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SamuraiButtonComponent, SamuraiButtonConfig } from '../../../button/src/public-api';

@Component({
	selector: 'samurai-paginator',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, SamuraiButtonComponent],
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss'],
})
export class SamuraiPaginatorComponent implements OnInit, OnDestroy {
	constructor(private readonly fb: FormBuilder) {}

	@Input() config?: SamuraiPaginatorConfig;

	@Input() id: string = '1';
	@Input() color: string = '#ffffff';
	@Input() backgroundColor: string = '#aaaaaa';
	@Input() goToPage: boolean = false;
	@Input() itemsPerPage: boolean = false;
	@Input() alignment: 'start' | 'center' | 'end' = 'start';
	@Input() itemBoxSize: '32px' | '40px' | '48px' = '40px';
	@Input() itemsPerPageOptions: number[] = [5, 10, 20, 50, 100, -1];
	@Input() totalItems: number = 0;
	@Input() fontFamily: string = 'initial';
	@Input() activePage?: number;

	@Output() $paged = new EventEmitter<{ activePage: number; startItemIndex: number; endItemIndex: number }>(true);
	@Output() $changeItemPerPage = new EventEmitter<string>(true);
	@Output() $goToPage = new EventEmitter<number>(true);

	public itemPerPage: number = this.itemsPerPageOptions[0];
	public totalPages: number = 1;
	public pages: number[] = [];
	public currentPageTextColor!: string;

	public configButtonFirst = new SamuraiButtonConfig(
		'1',
		'first page',
		'CONTENT_ONLY',
		'ICON',
		'FILL',
		'SHARP',
		'ENABLED',
		true,
		false,
		true,
		'ltr',
		'40px',
		'40px',
		'navigate_next',
		'round',
		'#ffffff',
		this.backgroundColor,
		this.color
	);
	public configButtonPrevious = new SamuraiButtonConfig('2', 'previous page');
	public configButtonNext = new SamuraiButtonConfig('3', 'next page');
	public configButtonLast = new SamuraiButtonConfig('4', 'last page');

	public currentPage = this.fb.nonNullable.control(1);

	private currentPage$: Subscription = this.currentPage.valueChanges.subscribe((value) => {});

	setCurrentPage(page: string): void {
		if (page) this.currentPage.patchValue(Number(page));
	}

	ngOnInit(): void {
		this.totalPages = this.totalItems / this.itemPerPage;
	}

	ngOnDestroy(): void {
		this.currentPage$?.unsubscribe();
	}
}
