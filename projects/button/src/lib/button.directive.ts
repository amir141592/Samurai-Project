import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { SamuraiButtonConfig } from './config.class';

@Directive({
  selector: '[samuraiButton]',
  standalone: true,
})
export class SamuraiButtonDirective implements OnInit, AfterContentInit {
  constructor(private element: ElementRef<HTMLButtonElement>) {}

  private text: string = '';

  @HostListener('mouseenter') setStyle(): void {
    switch (this.hoverStyle) {
      case 'BOTH_SIDES':
        this.element.nativeElement.style.boxShadow = `inset -10.5em 0 0 0 ${this.hoverColor}, inset 10.5em 0 0 0 ${this.hoverColor}`;
        break;

      case 'GLOW':
        this.element.nativeElement.style.boxShadow = `0 0 5px ${this.backgroundColor}, 0 0 25px ${this.backgroundColor}`;
        this.element.nativeElement.style.transform = `scale(110%)`;
        break;

      case 'NEON_BORDER':
        this.element.nativeElement.style.filter = `drop-shadow(0 0 12px ${this.borderColor})`;
        break;

      case 'FILL':
        this.element.nativeElement.style.color = this.hoverColor;
        this.element.nativeElement.style.backgroundColor = this.borderColor;
        break;
    }
  }

  @HostListener('mouseleave') removeStyle(): void {
    switch (this.hoverStyle) {
      case 'BOTH_SIDES':
        this.element.nativeElement.style.boxShadow = ``;
        break;

      case 'GLOW':
        this.element.nativeElement.style.boxShadow = ``;
        this.element.nativeElement.style.transform = `scale(100%)`;
        break;

      case 'NEON_BORDER':
        this.element.nativeElement.style.filter = '';
        break;

      case 'FILL':
        this.element.nativeElement.style.color = this.color;
        this.element.nativeElement.style.backgroundColor = `transparent`;
        break;
    }
  }

  @HostListener('click') @Input() btnAction = () =>
    console.log('Button Clicked!');

  @Input() preStyled?:
    | 'PRIMARY_TEXT'
    | 'ACCENT_TEXT'
    | 'SUCCESS_TEXT'
    | 'WARNING_TEXT'
    | 'DANGER_TEXT'
    | 'PRIMARY_ICON'
    | 'ACCENT_ICON'
    | 'SUCCESS_ICON'
    | 'WARNING_ICON'
    | 'DANGER_ICON';

  @Input() config?: SamuraiButtonConfig;

  @Input() variation: 'FILLED' | 'OUTLINED' | 'CONTENT_ONLY' = 'FILLED';
  @Input() content: 'TEXT' | 'TEXT_ICON' | 'ICON' = 'TEXT';
  @Input() hoverStyle:
    | 'LEFT_TO_RIGHT'
    | 'RIGHT_TO_LEFT'
    | 'BOTH_SIDES'
    | 'SHUTTER_UP'
    | 'SHUTTER_DOWN'
    | 'GLOW'
    | 'NEON_BORDER'
    | 'FILL'
    | 'NONE' = 'NONE';
  @Input() borderRadius: 'NORMAL' | 'ROUND' | 'SHARP' = 'NORMAL';
  @Input() state: 'ENABLED' | 'PENDING' | 'DONE' | 'FAILED' | 'DISABLED' =
    'ENABLED'; // ! not all states implemented yet

  @Input() icon: string = 'favorite';
  @Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' =
    'round';

  @Input() color: string = '#000000';
  @Input() backgroundColor: string = '#ffffff';
  @Input() hoverColor: string = '#0000aa';
  @Input() borderColor: string = '#000000';
  @Input() effectSpeed: 'FAST' | 'NORMAL' | 'SLOW' = 'NORMAL'; // ! not implemented yet
  @Input() colorDetection: boolean = true;
  @Input() hoverColorDetection: boolean = true;
  @Input() i18n: boolean = true;

  private backgroundColorHSL?: { h: number; s: number; l: number };

  private setContent(): void {
    let beforeElement = document.createElement('span');
    let disabledElement = document.createElement('span');

    this.element.nativeElement.innerText = '';
    this.element.nativeElement.setAttribute('title', this.text);
    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    this.element.nativeElement.style.borderColor = this.borderColor;
    this.element.nativeElement.style.display = 'flex';
    this.element.nativeElement.style.position = 'relative';
    this.element.nativeElement.style.border = '2px solid';
    this.element.nativeElement.style.transition = 'all 0.2s ease-in';
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.justifyContent = 'center';
    this.element.nativeElement.style.alignItems = 'center';
    this.element.nativeElement.classList.add('samurai-button');
    // this.element.nativeElement.style.padding = '4px 16px';
    // this.element.nativeElement.style.width = 'fit-content';
    // this.element.nativeElement.style.height = 'fit-content';

    if (this.text && (this.content == 'TEXT' || this.content == 'TEXT_ICON')) {
      let element = document.createElement('p');
      let text = document.createTextNode(this.text);

      element.appendChild(text);

      element.style.color = 'inherit';
      element.style.fontSize = 'inherit';
      element.style.zIndex = '2';

      this.element.nativeElement.appendChild(element);
    }

    if (this.content == 'TEXT_ICON' || this.content == 'ICON') {
      let element = document.createElement('span');
      let icon = document.createTextNode(this.icon);

      element.appendChild(icon);

      element.style.color = 'inherit';
      element.style.fontSize = 'inherit';
      element.classList.add(
        `material-icons${
          this.iconStyle == 'filled' ? '' : '-' + this.iconStyle
        }`
      );

      if (this.content == 'TEXT_ICON') element.style.marginRight = '8px';

      this.element.nativeElement.prepend(element);
    }

    disabledElement.classList.add('samurai-disabled');

    if (this.state == 'DISABLED') disabledElement.style.display = 'inline';
    else disabledElement.style.display = 'none';

    this.element.nativeElement.append(disabledElement);

    beforeElement.classList.add('samurai-before');
    beforeElement.style.color = this.hoverColor;
    beforeElement.style.backgroundColor = this.hoverColor;
    beforeElement.style.position = 'absolute';
    beforeElement.style.zIndex = '1';

    this.element.nativeElement.prepend(beforeElement);
  }

  private getClass(): any {
    switch (this.hoverStyle) {
      case 'LEFT_TO_RIGHT':
        return 'samurai-left-to-right';

      case 'SHUTTER_UP':
        return 'samurai-shutter-up';

      case 'SHUTTER_DOWN':
        return 'samurai-shutter-down';
    }
  }

  ngOnInit(): void {
    if (this.preStyled)
      switch (this.preStyled) {
        case 'PRIMARY_TEXT':
          this.backgroundColor = '#64B5F6';
          this.hoverStyle = 'LEFT_TO_RIGHT';
          this.hoverColor = '#2196F3';
          break;

        case 'ACCENT_TEXT':
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#F6A564';
          this.borderColor = '#F6A564';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;

        case 'SUCCESS_TEXT':
          this.backgroundColor = '#81C784';
          this.hoverStyle = 'LEFT_TO_RIGHT';
          this.hoverColor = '#4CAF50';
          break;

        case 'WARNING_TEXT':
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#FFD54F';
          this.borderColor = '#FFD54F';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;

        case 'DANGER_TEXT':
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#EF5350';
          this.borderColor = '#EF5350';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;

        case 'PRIMARY_ICON':
          this.content = 'ICON';
          this.backgroundColor = '#64B5F6';
          this.hoverColor = '#2196F3';
          this.hoverStyle = 'GLOW';
          break;

        case 'ACCENT_ICON':
          this.content = 'ICON';
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#F6A564';
          this.borderColor = '#F6A564';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;

        case 'SUCCESS_ICON':
          this.content = 'ICON';
          this.backgroundColor = '#81C784';
          this.hoverColor = '#4CAF50';
          this.hoverStyle = 'GLOW';
          break;

        case 'WARNING_ICON':
          this.content = 'ICON';
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#FFD54F';
          this.borderColor = '#FFD54F';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;

        case 'DANGER_ICON':
          this.content = 'ICON';
          this.variation = 'OUTLINED';
          this.backgroundColor = 'transparent';
          this.color = '#EF5350';
          this.borderColor = '#EF5350';
          this.hoverStyle = 'FILL';
          this.hoverColor = '#000';
          break;
      }

    if (this.config)
      for (const key in this.config)
        switch (key) {
          case 'variation':
            this.variation = this.config[key];
            break;

          case 'content':
            this.content = this.config[key];
            break;

          case 'hoverStyle':
            this.hoverStyle = this.config[key];
            break;

          case 'borderRadius':
            this.borderRadius = this.config[key];
            break;

          case 'state':
            this.state = this.config[key];
            break;

          case 'colorDetection':
            this.colorDetection = this.config[key];
            break;

          case 'i18n':
            this.i18n = this.config[key];
            break;

          case 'icon':
            this.icon = this.config[key];
            break;

          case 'iconStyle':
            this.iconStyle = this.config[key];
            break;

          case 'color':
            this.color = this.config[key];
            break;

          case 'backgroundColor':
            this.backgroundColor = this.config[key];
            break;

          case 'hoverColor':
            this.hoverColor = this.config[key];
            break;
        }

    if (
      this.hoverColorDetection &&
      this.backgroundColor?.length == 7 &&
      (this.hoverStyle == 'LEFT_TO_RIGHT' ||
        this.hoverStyle == 'RIGHT_TO_LEFT' ||
        this.hoverStyle == 'BOTH_SIDES' ||
        this.hoverStyle == 'SHUTTER_DOWN' ||
        this.hoverStyle == 'SHUTTER_UP')
    ) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        this.backgroundColor
      );

      if (result) {
        let r = parseInt(result[1], 16) / 255;
        let g = parseInt(result[2], 16) / 255;
        let b = parseInt(result[3], 16) / 255;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);

        let h!: number;
        let s: number;
        let l = (max + min) / 2;

        if (max == min) h = s = 0; // ? achromatic
        else {
          let d = max - min;

          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

          switch (max) {
            case r:
              h = (g - b) / d + (g < b ? 6 : 0);
              break;

            case g:
              h = (b - r) / d + 2;
              break;

            case b:
              h = (r - g) / d + 4;
              break;
          }

          h /= 6;
        }

        h = Math.round(360 * h);
        s = s * 100;
        s = Math.round(s);
        l = l * 100;
        l = Math.round(l);

        this.backgroundColorHSL = { h, s, l };
        this.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
        this.hoverColor = `hsl(${h}, ${l - 20 >= 50 ? s : s + 9}%, ${l - 10}%)`;
      }
    }

    if (
      this.colorDetection &&
      this.backgroundColor?.length == 7 &&
      this.variation == 'FILLED'
    ) {
      if (this.backgroundColorHSL) {
        if (this.backgroundColorHSL.l > 50) this.color = '#000000';
        else if (this.backgroundColorHSL.l <= 50) this.color = '#ffffff';
      } else {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
          this.backgroundColor
        );

        if (result) {
          let r = parseInt(result[1], 16) / 255;
          let g = parseInt(result[2], 16) / 255;
          let b = parseInt(result[3], 16) / 255;

          let max = Math.max(r, g, b);
          let min = Math.min(r, g, b);

          let l = (max + min) / 2;

          l = l * 100;
          l = Math.round(l);

          if (l > 50) this.color = '#000000';
          else if (l <= 50) this.color = '#ffffff';
        }
      }
    }
  }

  ngAfterContentInit(): void {
    this.text = this.element.nativeElement.innerText;

    this.setContent();

    switch (this.state) {
      case 'ENABLED':
        switch (this.variation) {
          case 'FILLED':
            this.element.nativeElement.style.border = 'none';
            break;

          case 'OUTLINED':
            this.element.nativeElement.style.backgroundColor = 'transparent';
            this.element.nativeElement.style.borderColor = this.color;
            break;

          case 'CONTENT_ONLY':
            this.element.nativeElement.style.border = 'none';
            this.element.nativeElement.style.backgroundColor = 'transparent';
            this.element.nativeElement.classList.add('samurai-text-underline');
            break;
        }
        break;

      case 'DISABLED':
        this.hoverStyle = 'NONE';
        this.element.nativeElement.style.cursor = 'not-allowed';
        break;

      case 'PENDING':
        break;

      case 'DONE':
        break;

      case 'FAILED':
        break;
    }

    switch (this.borderRadius) {
      case 'NORMAL':
        this.element.nativeElement.style.borderRadius = `${
          this.element.nativeElement.offsetHeight / 5
        }px`;
        break;

      case 'ROUND':
        this.element.nativeElement.style.borderRadius = `10000px`;
        break;

      case 'SHARP':
        this.element.nativeElement.style.borderRadius = `2px`;
        break;
    }

    if (this.content == 'ICON') {
      this.element.nativeElement.style.padding = '8px';
    }

    if (this.i18n) {
      this.element.nativeElement.setAttribute('i18n', '');
      this.element.nativeElement.setAttribute('i18n-title', '');
    }

    this.element.nativeElement.classList.add(this.getClass());
  }
}
