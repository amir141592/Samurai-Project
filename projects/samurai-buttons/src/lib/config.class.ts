export class SamuraiButtonsConfig {
	private _type: 'TEXT' | 'ICON' | 'TEXT-ICON' = 'TEXT';
	private _style: 'FORMAL' | 'CASUAL' | 'SHARP' = 'FORMAL';
	private _color: string = '#fff';
	private _backgroundColor: string = '#000';
	private _styleClasses: string = '';
	private _text: string = 'Samurai';
	private _fontFamily: string = 'initial';
	private _icon: string = 'favorite';
	private _width: string = 'fit-content';
	private _height: string = 'fit-content';

	public get type(): 'TEXT' | 'ICON' | 'TEXT-ICON' {
		return this._type;
	}

	public set type(value: 'TEXT' | 'ICON' | 'TEXT-ICON') {
		this._type = value;
	}

	public get style(): 'FORMAL' | 'CASUAL' | 'SHARP' {
		return this._style;
	}

	public set style(value: 'FORMAL' | 'CASUAL' | 'SHARP') {
		this._style = value;
	}

	public get color(): string {
		return this._color;
	}

	public set color(value: string) {
		this._color = value;
	}

	public get backgroundColor(): string {
		return this._backgroundColor;
	}

	public set backgroundColor(value: string) {
		this._backgroundColor = value;
	}

	public get styleClasses(): string {
		return this._styleClasses;
	}

	public set styleClasses(value: string) {
		this._styleClasses = value;
	}

	public get text(): string {
		return this._text;
	}

	public set text(value: string) {
		this._text = value;
	}

	public get fontFamily(): string {
		return this._fontFamily;
	}

	public set fontFamily(value: string) {
		this._fontFamily = value;
	}

	public get icon(): string {
		return this._icon;
	}

	public set icon(value: string) {
		this._icon = value;
	}

	public get width(): string {
		return this._width;
	}

	public set width(value: string) {
		this._width = value;
	}

	public get height(): string {
		return this._height;
	}

	public set height(value: string) {
		this._height = value;
	}

	constructor(
		type: 'TEXT' | 'ICON' | 'TEXT-ICON' = 'TEXT',
		style: 'FORMAL' | 'CASUAL' | 'SHARP' = 'FORMAL',
		color: string = '#fff',
		backgroundColor: string = '#000',
		styleClasses: string = '',
		text: string = 'Samurai',
		fontFamily: string = 'initial',
		icon: string = 'favorite',
		width: string = 'fit-content',
		height: string = 'fit-content'
	) {
		this.type = type;
		this.style = style;
		this.color = color;
		this.backgroundColor = backgroundColor;
		this.styleClasses = styleClasses;
		this.text = text;
		this.fontFamily = fontFamily;
		this.icon = icon;
		this.width = width;
		this.height = height;
	}
}
