export class SamuraiButtonConfig {
  private _variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED';
  private _content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
  private _hoverStyle:
    | 'LEFT_TO_RIGHT'
    | 'BOTH_SIDES'
    | 'SHUTTER_UP'
    | 'SHUTTER_DOWN'
    | 'GLOW'
    | 'NEON_BORDER'
    | 'FILL'
    | 'NONE' = 'LEFT_TO_RIGHT';
  private _borderRadius: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL';
  private _state: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' =
    'ENABLED';
  private _colorDetection: boolean = true;
  private _hoverColorDetection: boolean = true;
  private _i18n: boolean = false;
  private _icon: string = 'favorite';
  private _iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    'round';
  private _color: string = '#000000';
  private _backgroundColor: string = '#ffffff';
  private _hoverColor: string = '#0000aa';
  private _borderColor: string = '#000000';

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

  public get hoverStyle():
    | 'LEFT_TO_RIGHT'
    | 'BOTH_SIDES'
    | 'SHUTTER_UP'
    | 'SHUTTER_DOWN'
    | 'GLOW'
    | 'NEON_BORDER'
    | 'FILL'
    | 'NONE' {
    return this._hoverStyle;
  }

  public set hoverStyle(
    value:
      | 'LEFT_TO_RIGHT'
      | 'BOTH_SIDES'
      | 'SHUTTER_UP'
      | 'SHUTTER_DOWN'
      | 'GLOW'
      | 'NEON_BORDER'
      | 'FILL'
      | 'NONE'
  ) {
    this._hoverStyle = value;
  }

  public get borderRadius(): 'NORMAL' | 'ROUND' | 'SHARP' {
    return this._borderRadius;
  }

  public set borderRadius(value: 'NORMAL' | 'ROUND' | 'SHARP') {
    this._borderRadius = value;
  }

  public get state(): 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' {
    return this._state;
  }

  public set state(
    value: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED'
  ) {
    this._state = value;
  }

  public get colorDetection(): boolean {
    return this._colorDetection;
  }

  public set colorDetection(value: boolean) {
    this._colorDetection = value;
  }

  public get hoverColorDetection(): boolean {
    return this._hoverColorDetection;
  }

  public set hoverColorDetection(value: boolean) {
    this._hoverColorDetection = value;
  }

  public get i18n(): boolean {
    return this._i18n;
  }

  public set i18n(value: boolean) {
    this._i18n = value;
  }

  public get icon(): string {
    return this._icon;
  }

  public set icon(value: string) {
    this._icon = value;
  }

  public get iconStyle():
    | 'filled'
    | 'outlined'
    | 'round'
    | 'sharp'
    | 'two-tone' {
    return this._iconStyle;
  }

  public set iconStyle(
    value: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone'
  ) {
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

  public get borderColor(): string {
    return this._borderColor;
  }

  public set borderColor(value: string) {
    this._borderColor = value;
  }

  constructor(
    variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED',
    content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT_ICON',
    hoverStyle:
      | 'LEFT_TO_RIGHT'
      | 'BOTH_SIDES'
      | 'SHUTTER_UP'
      | 'SHUTTER_DOWN'
      | 'GLOW'
      | 'NEON_BORDER'
      | 'FILL'
      | 'NONE' = 'LEFT_TO_RIGHT',
    borderRadius: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL',
    state: 'ENABLED' | 'DISABLED' = 'ENABLED',
    colorDetection: boolean = true,
    hoverColorDetection: boolean = true,
    i18n: boolean = false,
    icon: string = 'favorite',
    iconStyle:
      | 'filled'
      | 'outlined'
      | 'round'
      | 'sharp'
      | 'two-tone' = 'filled',
    color: string = '#000000',
    backgroundColor: string = '#ffffff',
    hoverColor: string = '#0000aa',
    borderColor: string = '#000000'
  ) {
    this.variation = variation;
    this.content = content;
    this.hoverStyle = hoverStyle;
    this.borderRadius = borderRadius;
    this.state = state;
    this.colorDetection = colorDetection;
    this.hoverColorDetection = hoverColorDetection;
    this.i18n = i18n;
    this.icon = icon;
    this.iconStyle = iconStyle;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.hoverColor = hoverColor;
    this.borderColor = borderColor;
  }
}
