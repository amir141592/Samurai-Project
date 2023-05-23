export class SamuraiButtonConfig {
	private _id: string = '1';
	private _text: string = 'Samurai';
	private _variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED';
	private _content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
	private _hoverStyle: 'LEFT_TO_RIGHT' | 'BOTH_SIDES' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE' = 'LEFT_TO_RIGHT';
	private _borderAngle: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL';
	private _state: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' = 'ENABLED';
	private _width: string = 'fit-content';
	private _height: string = 'fit-content';
	private _icon: string = 'favorite';
	private _iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'round';
	private _color: string = '#000';
	private _backgroundColor: string = '#fff';
	private _hoverColor: string = '#00f';
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

	public get variation(): 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' {
		return this._variation;
	}

	public set variation(value: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY') {
		this._variation = value;
	}

	public get content(): 'TEXT' | 'TEXT_ICON' | 'ICON' {
		return this._content;
	}

	public set content(value: 'TEXT' | 'TEXT_ICON' | 'ICON') {
		this._content = value;
	}

	public get hoverStyle(): 'LEFT_TO_RIGHT' | 'BOTH_SIDES' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE' {
		return this._hoverStyle;
	}

	public set hoverStyle(value: 'LEFT_TO_RIGHT' | 'BOTH_SIDES' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE') {
		this._hoverStyle = value;
	}

	public get borderAngle(): 'NORMAL' | 'ROUND' | 'SHARP' {
		return this._borderAngle;
	}

	public set borderAngle(value: 'NORMAL' | 'ROUND' | 'SHARP') {
		this._borderAngle = value;
	}

	public get state(): 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' {
		return this._state;
	}

	public set state(value: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED') {
		this._state = value;
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

	public get icon(): string {
		return this._icon;
	}

	public set icon(value: string) {
		this._icon = value;
	}

	public get iconStyle(): 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' {
		return this._iconStyle;
	}

	public set iconStyle(value: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone') {
		this._iconStyle = value;
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

	public get hoverColor(): string {
		return this._hoverColor;
	}

	public set hoverColor(value: string) {
		this._hoverColor = value;
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
		id: string,
		text: string,
		variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED',
		content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT_ICON',
		hoverStyle: 'LEFT_TO_RIGHT' | 'BOTH_SIDES' | 'SHUTTER_UP' | 'SHUTTER_DOWN' | 'GLOW' | 'NEON_BORDER' | 'FILL' | 'NONE' = 'LEFT_TO_RIGHT',
		borderAngle: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL',
		state: 'ENABLED' | 'DISABLED' = 'ENABLED',
		width: string = 'fit-content',
		height: string = 'fit-content',
		icon: string = 'favorite',
		iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled',
		color: string = '#000',
		backgroundColor: string = '#fff',
		hoverColor: string = '#00f',
		fontSize: string = '24px',
		fontFamily: string = 'initial'
	) {
		if (id) this.id = id;
		if (text) this.text = text;
		this.variation = variation;
		this.content = content;
		this.hoverStyle = hoverStyle;
		this.borderAngle = borderAngle;
		this.state = state;
		this.width = width;
		this.height = height;
		this.icon = icon;
		this.iconStyle = iconStyle;
		this.color = color;
		this.backgroundColor = backgroundColor;
		this.hoverColor = hoverColor;
		this.fontSize = fontSize;
		this.fontFamily = fontFamily;
	}
}
