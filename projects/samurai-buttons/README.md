# Samurai Button

Make your app stylish with pre-styled buttons

## Features Overview

This component has:

- 3 Variations
- 3 Content Types
- 7 Hover Effects
- 3 Border Radius Styles
- 2 States
- [Material Icon Font (super light weight)](https://www.npmjs.com/package/@material-design-icons/font)

The style of the button is based on UI/UX guidelines. You can set  
filled, outlined or texted variations for it or change content type  
to text, text and icon or just icon to get the right emphesize you need.  
Plus you have the super light weight material icons font package to make  
buttons even more stylish!

## Installation

This component supports **Angular 16 and higher**

Run the code below in your project terminal:

```bash
ng add @kuro-samurai/ngx-samurai-button
```

This command will install the component and material icons font package  
and updates your project styles.scss file and adds line  
`@import "@material-design-icons/font";` at top of it.

## Basic Use

If your component is standalone, import the component to your  
@Component decorator:

```typescript
@Component({
  ...
  standalone: true,
  imports: [CommonModule, SamuraiButtonsComponent],
  ...
})
```

Else import it to your component's module:

```typescript
@NgModule({
  ...
  imports: [CommonModule, SamuraiButtonsComponent],
  ...
})
```

Then in your component use constructor of class `SamuraiButtonConfig`:

```typescript
public buttonConfig = new SamuraiButtonConfig()
```

In the parenthesis use shortcut `ctrl + space` or `command + space` to see available values.  
All parameters have default values so you don't need to pass all values.

Then pass the config object to component input:

```html
<samurai-button [config]="buttonConfig"></samurai-button>
```

Refer to properties table below for values and defaults.

### Button With Action

To make button do a certain action everytime user clicks on it,  
you can pass a function to it like this:

1. Declare a method in parent component:

   ```typescript
   public foo = () => console.log("action foo")
   ```

2. Then pass it to property `btnAction`:

   ```html
   <samurai-button [config]="buttonConfig" [btnAction]="foo"></samurai-button>
   ```

If you have complex action to happen after button click,  
bind your action to event `$btnClick` like this:

```html
<samurai-button [config]="buttonConfig" ($btnClick)="foo($event)"></samurai-button>
```

The $event value is button id and the type is string.

## Preview

Soon i add a demo for this component.

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
   <td>id</td>
   <td>A unique id in the parent component (or all rendered components) for the button</td>
   <td>any string</td>
   <td><code>'1'</code></td>
  </tr>
  <tr>
   <td>text</td>
   <td>Set button text</td>
   <td>any string</td>
   <td><code>'Samurai'</code></td>
  </tr>
  <tr>
   <td>variation</td>
   <td>Overall style of button based on UI/UX guidelines that controls emphesize and priority of the button</td>
   <td><code>'FILLED'</code>, <code>'OUTLINED'</code>, <code>'CONTENT_ONLY'</code></td>
   <td><code>'FILLED'</code></td>
  </tr>
  <tr>
   <td>content</td>
   <td>Set Content type of the button to be text, text and icon or just icon</td>
   <td><code>'TEXT'</code>, <code>'TEXT_ICON'</code>, <code>'ICON'</code></td>
   <td><code>'TEXT'</code></td>
  </tr>
  <tr>
   <td>hoverStyle</td>
   <td>Set button hover style. currently it has 7 different styles</td>
   <td>
    <code>'LEFT_TO_RIGHT'</code>, <code>'BOTH_SIDES'</code>, <code>'SHUTTER_UP'</code>, <code>'SHUTTER_DOWN'</code>, <code>'GLOW'</code>,
    <code>'NEON_BORDER'</code>, <code>'FILL'</code>, <code>'NONE'</code>
   </td>
   <td><code>'LEFT_TO_RIGHT'</code></td>
  </tr>
  <tr>
   <td>borderAngle</td>
   <td>Set button border radius based on UI/UX guidelines</td>
   <td><code>'NORMAL'</code>, <code>'ROUND'</code>, <code>'SHARP'</code></td>
   <td><code>'NORMAL'</code></td>
  </tr>
  <tr>
   <td>state</td>
   <td>Set button state to either enabled or disabled. the disabled state will have no hover effect and has a gray shade over it</td>
   <td><code>'ENABLED'</code>, <code>'DISABLED'</code></td>
   <td><code>'ENABLED'</code></td>
  </tr>
  <tr>
   <td>icon</td>
   <td>
    set button icon based on material icons names. Just pass icon name to this property. Refer to
    <a href="https://fonts.google.com/icons?icon.set=Material+Icons" target="_blank" rel="noopener noreferrer">Material Icon Repository</a>
   </td>
   <td>Any Material Icon</td>
   <td><code>'favorite'</code></td>
  </tr>
  <tr>
   <td>iconStyle</td>
   <td>Set icon style based on material icon styles</td>
   <td><code>'filled'</code>, <code>'outlined'</code>, <code>'round'</code>, <code>'sharp'</code>, <code>'two-tone'</code></td>
   <td><code>'filled'</code></td>
  </tr>
  <tr>
   <td>color</td>
   <td>Set text and icon color for the button</td>
   <td>any color string in format of hexadecimal, RGB and HSL</td>
   <td><code>'#000'</code></td>
  </tr>
  <tr>
   <td>backgroundColor</td>
   <td>Set background color of the button</td>
   <td>any color string in format of hexadecimal, RGB and HSL</td>
   <td><code>'#fff'</code></td>
  </tr>
  <tr>
   <td>hoverColor</td>
   <td>Set button hover effect color</td>
   <td>any color string in format of hexadecimal, RGB and HSL</td>
   <td><code>'#00a'</code></td>
  </tr>
 </tbody>
</table>

## Related Resources

This component is part of [Samurai UI](https://github.com/amir141592/Samurai-Project) project.

## Future Plans

The following features will be added soon:

- Setting up a live demo
- A few pre-defined button styles to quickly choose between them
- Passing a single config object to button ✅
- Passing a function to button that executes on button click ✅
- Automatically detecting right text color for button based on background color
- Automatically detecting right hover effect color based on  
  color and background color

## Developer Words

I learned programming for free on the web. Now I want to return  
the love to programmers community. I plan to make a free UI kit for  
angular and this package is one of many free packages i will publish on npm.

## Contributors

- Developer: [Amir Allahdadian](https://github.com/amir141592)
