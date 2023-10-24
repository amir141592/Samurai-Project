# Samurai Button

Make your app stylish with pre-styled buttons

## Features Overview

This directive has:

- 3 Variations
- 3 Content Types
- 7 Hover Effects
- 3 Border Radius Styles
- 2 States
- 10 Pre-styled Buttons
- Automatic text and icon and hover color detection
- Support for [Angular Internationalization](https://angular.io/guide/i18n-overview)
- Support for [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Material Icon Font (super light weight)](https://www.npmjs.com/package/@material-design-icons/font)

The style of the button is based on UI/UX guidelines. You can set  
filled, outlined or texted variations for it or change content type  
to text, text and icon or just icon to get the right attention and priority you need.

## Installation

This directive supports **Angular 16 and higher**

Run the code below in your project terminal:

```powershell
ng add @kuro-samurai/ngx-samurai-button
```

This command will install material icon font package.  
The samurai-styles.css file will be created in the root  
of your project and it will be added to your angular.json  
project styles

## Use

    Selector: samuraiButton
    Type: Standalone

1. Import the directive

   - If your component is standalone, import the directive to your  
     @Component decorator:

     ```typescript
     @Component({
       //...
       standalone: true,
       imports: [CommonModule, SamuraiButtonsComponent],
       //...
     })
     ```

   - Else import it to your component's module:

     ```typescript
     @NgModule({
       //...
       imports: [CommonModule, SamuraiButtonsComponent],
       //...
     })
     ```

2. Then in your component import class `SamuraiButtonConfig` and use its constructor:

   ```typescript
   public buttonConfig = new SamuraiButtonConfig()
   ```

   In the parenthesis use shortcut `ctrl + space` or `command + space` to see available values.  
   All parameters have default values so you don't need to pass all values.

   _Note: Refer to properties table below for values and defaults.  
   You can either pass each property individually or pass  
   config object, If you do both, values in config object will overwrite  
   individual values!_

3. Pass the config object to directive input:

   ```html
   <button samuraiButton [config]="buttonConfig"></button>
   ```

### Button With Action

To make button do a certain action everytime user clicks on it,  
you can pass a function to it like this:

1. Declare a method in parent component:

   ```typescript
   public foo = () => console.log("action foo")
   ```

2. Then pass it to property `btnAction`:

   ```html
   <button samuraiButton [config]="buttonConfig" [btnAction]="foo"></button>
   ```

If you have complex action to happen after button click,  
bind your action to event `click` like this:

```html
<button samuraiButton [config]="buttonConfig" (click)="foo()"></button>
```

### Using Pre-Styled Button

Assign one of the values in properties table blow to property (input) `preStyled`:

```html
<button samuraiButton preStyled="PRIMARY_TEXT"></button>
```

More pre-styled buttons will be added soon.

_Warning: If you pass both preStyled and config, values in config has priority._

_Note: you can overwrite styles with css or add additional styles to button like changing padding, shadow and .etc_

## Preview

For Live demo visit [Github page for Samurai UI (Beta)](https://amir141592.github.io/Samurai-Project/)

## Properties (Inputs)

<table>
 <thead>
  <tr>
   <th>Property</th>
   <th>Description</th>
   <th>Values</th>
   <th>Default</th>
  </tr>
 </thead>
 <tbody>
  <tr>
	<td>config</td>
	<td>
		An object of type <code>SamuraiButtonConfig</code> that has all properties in this table except preStyled. Pass an instance of it to button to
		configure all button properties quickly.
	</td>
	<td>instanceof <code>SamuraiButtonConfig</code></td>
	<td>null</td>
</tr>
  <tr>
	<td>preStyled</td>
	<td>Set it to any available pre styled buttons for a quick config; Still you need to pass id and text to button.</td>
	<td>
		<code>'PRIMARY_TEXT'</code>, <code>'ACCENT_TEXT'</code>, <code>'SUCCESS_TEXT'</code>, <code>'WARNING_TEXT'</code>, <code>'DANGER_TEXT'</code>,
		<code>'PRIMARY_ICON'</code>, <code>'ACCENT_ICON'</code>, <code>'SUCCESS_ICON'</code>, <code>'WARNING_ICON'</code>, <code>'DANGER_ICON'</code>
	</td>
	<td>null</td>
</tr>
  <tr>
   <td>variation</td>
   <td>Overall style of button based on UI/UX guidelines that controls emphesize and priority of the button.</td>
   <td><code>'FILLED'</code>, <code>'OUTLINED'</code>, <code>'CONTENT_ONLY'</code></td>
   <td><code>'FILLED'</code></td>
  </tr>
  <tr>
   <td>content</td>
   <td>Set Content type of the button to be text, text and icon or just icon.</td>
   <td><code>'TEXT'</code>, <code>'TEXT_ICON'</code>, <code>'ICON'</code></td>
   <td><code>'TEXT'</code></td>
  </tr>
  <tr>
   <td>hoverStyle</td>
   <td>Set button hover style. currently it has 7 different styles and more styles will be added.</td>
   <td>
    <code>'LEFT_TO_RIGHT'</code>, <code>'BOTH_SIDES'</code>, <code>'SHUTTER_UP'</code>, <code>'SHUTTER_DOWN'</code>, <code>'GLOW'</code>,
    <code>'NEON_BORDER'</code>, <code>'FILL'</code>, <code>'NONE'</code>
   </td>
   <td><code>'NONE'</code></td>
  </tr>
  <tr>
   <td>borderRadius</td>
   <td>Set button border radius based on UI/UX guidelines.</td>
   <td><code>'NORMAL'</code>, <code>'ROUND'</code>, <code>'SHARP'</code></td>
   <td><code>'NORMAL'</code></td>
  </tr>
  <tr>
   <td>state</td>
   <td>Set button state to either enabled or disabled. the disabled state will have no hover effect and has a gray shade over it.</td>
   <td><code>'ENABLED'</code>, <code>'DISABLED'</code></td>
   <td><code>'ENABLED'</code></td>
  </tr>
  <tr>
	 <td>colorDetection</td>
	 <td>Control auto text and icon color detection feature when variation is <code>'FILLED'</code> based on background color you passed.</td>
	 <td><code>true</code>, <code>false</code></td>
	 <td><code>true</code></td>
  </tr>
  <tr>
	 <td>hoverColorDetection</td>
	 <td>
		Control auto hover color detection feature. The button AI 😉 will pick a darker shade of background color when hover style is
		<code>'LEFT_TO_RIGHT'</code> | <code>'RIGHT_TO_LEFT'</code> | <code>'BOTH_SIDES'</code> | <code>'SHUTTER_UP'</code> | <code>'SHUTTER_DOWN'</code>
	 </td>
	 <td>boolean</td>
	 <td><code>true</code></td>
  </tr>
  <tr>
	 <td>i18n</td>
	 <td>Setting up button for angular i18n (Internationalization) feature. Read <a href="https://angular.io/guide/i18n-overview" target="_blank" rel="noopener noreferrer">Angular Internationalization</a></td>
	 <td>boolean</td>
	 <td><code>true</code></td>
  </tr>
  <tr>
   <td>icon</td>
   <td>
    set button icon based on material icons names. Just pass icon name to this property. Refer to
    <a href="https://fonts.google.com/icons?icon.set=Material+Icons" target="_blank" rel="noopener noreferrer">Material Icon Repository</a>.
   </td>
   <td>Any Material Icon</td>
   <td><code>'favorite'</code></td>
  </tr>
  <tr>
   <td>iconStyle</td>
   <td>Set icon style based on material icon styles.</td>
   <td><code>'filled'</code>, <code>'outlined'</code>, <code>'round'</code>, <code>'sharp'</code>, <code>'two-tone'</code></td>
   <td><code>'filled'</code></td>
  </tr>
  <tr>
   <td>color</td>
   <td>Set text and icon color for the button. If color detection is enabled just pass background color.</td>
   <td>any color string in format of hexadecimal</td>
   <td><code>'#000000'</code></td>
  </tr>
  <tr>
   <td>backgroundColor</td>
   <td>Set background color of the button.</td>
   <td>any color string in format of hexadecimal</td>
   <td><code>'#ffffff'</code></td>
  </tr>
  <tr>
   <td>hoverColor</td>
   <td>Set button hover effect color. If hover color detection is enabled just pass background color.</td>
   <td>any color string in format of hexadecimal</td>
   <td><code>'#0000aa'</code></td>
  </tr>
 </tbody>
</table>

## Related Resources

This directive is part of [Samurai UI](https://github.com/amir141592/Samurai-Project) project.

## Future Plans

The following features will be added soon:

- Setting up a live demo ✅
- A few pre-defined button styles to quickly choose between them ✅
- Passing a single config object to button ✅
- Passing a function to button that executes on button click ✅
- Automatically detecting right text color for button based on background color ✅
- Automatically detecting right hover effect color based on  
  color and background color ✅
- Adding support for i18n (Internationalization) ✅
- Implementing ARIA support for people using AT ✅
- Transforming component to directive for better developer exprience ✅

## Developer Words

I learned programming from other developers on the web. Now I want to return  
the love to software developers community. I plan to make a free UI kit for  
angular and this package is one of many free packages I will publish on npm.

## Contributors

- Developer: [Amir Allahdadian](https://github.com/amir141592)
  - Email: amir.allahdadian@gmail.com
  - Whats App: +989900045145
  - Discord: -a-
