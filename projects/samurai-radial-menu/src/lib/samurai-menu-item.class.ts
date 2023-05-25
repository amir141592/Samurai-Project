export class SamuraiMenuItem {
	private _id: string = '1';
	private _text: string = 'Samurai';
	private _icon: string = 'favorite';
	private _description: string = 'good button description example';
	private _type: 'BUTTON' | 'RANGE' = 'BUTTON';
	private _action = () => console.log(`Button ${this.id} clicked`);
	private _value?: string | number | null;
	private _children: SamuraiMenuItem[] = [];

	public get id(): string {
		return this._id;
	}

	public set id(value: string) {
		this._id = value;
	}

	public get text(): string {
		return this._text;
	}

	public set text(value: string) {
		this._text = value;
	}

	public get icon(): string {
		return this._icon;
	}

	public set icon(value: string) {
		this._icon = value;
	}

	public get description(): string {
		return this._description;
	}

	public set description(value: string) {
		this._description = value;
	}

	public get type(): 'BUTTON' | 'RANGE' {
		return this._type;
	}

	public set type(value: 'BUTTON' | 'RANGE') {
		this._type = value;
	}

	public get action() {
		return this._action;
	}

	public set action(value) {
		this._action = value;
	}

	public get value(): any {
		return this._value;
	}

	public set value(value: any) {
		this._value = value;
	}

	public get children(): SamuraiMenuItem[] {
		return this._children;
	}

	public set children(value: SamuraiMenuItem[]) {
		this._children = value;
	}

	constructor(
		id: string = '1',
		text: string = 'Samurai',
		icon: string = 'favorite',
		description: string = 'good button description example',
		type: 'BUTTON' | 'RANGE' = 'BUTTON',
		action?: any,
		value?: string | number | null,
		children?: SamuraiMenuItem[]
	) {
		this.id = id;
		this.text = text;
		this.icon = icon;
		this.description = description;
		this.type = type;
		if (action) this.action = action;
		if (value) this.value = value;
		if (children) this.children = children;
	}
}
