export class SamuraiButtonsCustomConfig {
	private _id: string = '1';
	private _text: string = 'Samurai';
	private _icon: string = 'favorite';
	private _color: string = '#000';
	private _backgroundColor: string = '#fff';
	private _width: string = 'fit-content';
	private _height: string = 'fit-content';
	private _padding: string = '8px 16px';
	private _fontStyle: string = 'normal';
	private _fontVariant: string = 'normal';
	private _fontWeight: string = '500';
	private _fontSize: string = '24px';
	private _fontFamily: string = 'initial';

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

	public get padding(): string {
		return this._padding;
	}

	public set padding(value: string) {
		this._padding = value;
	}

	public get fontStyle(): string {
		return this._fontStyle;
	}

	public set fontStyle(value: string) {
		this._fontStyle = value;
	}

	public get fontVariant(): string {
		return this._fontVariant;
	}

	public set fontVariant(value: string) {
		this._fontVariant = value;
	}

	public get fontWeight(): string {
		return this._fontWeight;
	}

	public set fontWeight(value: string) {
		this._fontWeight = value;
	}

	public get fontSize(): string {
		return this._fontSize;
	}

	public set fontSize(value: string) {
		this._fontSize = value;
	}

	public get fontFamily(): string {
		return this._fontFamily;
	}

	public set fontFamily(value: string) {
		this._fontFamily = value;
	}

	constructor(
		id: string = '1',
		text: string = 'Samurai',
		icon: string = 'favorite',
		color: string = '#000',
		backgroundColor: string = '#fff',
		width: string = 'fit-content',
		height: string = 'fit-content',
		padding: string = '8px 16px',
		fontStyle: string = 'normal',
		fontVariant: string = 'normal',
		fontWeight: string = '400',
		fontSize: string = '24px',
		fontFamily: string = 'initial'
	) {
		this.id = id;
		this.text = text;
		this.icon = icon;
		this.color = color;
		this.backgroundColor = backgroundColor;
		this.width = width;
		this.height = height;
		this.padding = padding;
		this.fontStyle = fontStyle;
		this.fontVariant = fontVariant;
		this.fontWeight = fontWeight;
		this.fontSize = fontSize;
		this.fontFamily = fontFamily;
	}
}
