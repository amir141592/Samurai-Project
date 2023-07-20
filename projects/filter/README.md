# Samurai Filter

Filter your data with Samurai Filter Pipe

## Features Overview

This pipe has:

- 2 Filters For boolean Type Values
- 4 Filters For string Type Values
- 6 Filters For number Type Values

You can use this pipe in your template or your component to  
filter your data with any condition you want and it is simple and easy!

## Installation

This pipe supports **Angular 16 and higher**

Run the code below in your project terminal:

```powershell
ng add @kuro-samurai/ngx-samurai-filter
```

## Use

Type: `standalone`  
Name: `SamuraiFilter`  
Return Type: `any[]`

### Importing The Pipe

- If your component is standalone, import the pipe to your  
  @Component decorator:

  ```typescript
  @Component({
    //...
    standalone: true,
    imports: [CommonModule, FilterPipe],
    //...
  })
  ```

- Else import it to your component's module:

  ```typescript
  @NgModule({
    //...
    imports: [CommonModule, FilterPipe],
    //...
  })
  ```

### Available Conditions For Value Types

- boolean
  - equal
  - notEqual
- string
  - equal
  - notEqual
  - include
  - notInclude
- number
  - equal
  - notEqual
  - equal/greater
  - equal/lower
  - greater
  - lower

### Examples

#### Filter Value Boolean

```html
<div *ngFor="let user of users | SamuraiFilter : 'verified' : true : 'equal'">
 <p>{{ user.name }}</p>

 <p>{{ user.age }}</p>
</div>
```

In the exmaple above, users that are verified **true** will pass the filter.

---

#### Filter Value Number

```html
<div *ngFor="let user of users | SamuraiFilter : 'age' : 13 : 'equal/greater'">
 <p>{{ user.name }}</p>

 <p>{{ user.age }}</p>
</div>
```

In the exmaple above, users that are **13 years old or older** will pass the filter.

---

#### Filter Value String

```html
<div *ngFor="let user of users | SamuraiFilter : 'name' : 'David' : 'include'">
 <p>{{ user.name }}</p>

 <p>{{ user.age }}</p>
</div>
```

In the exmaple above, users that **their name include David** will pass the filter.

#### Using Pipe With \*ngIf Directive

```html
<ng-container *ngIf="data | async as users">
 <div *ngFor="let user of users | SamuraiFilter : 'age' : 13 : 'equal/greater'">
  <p>{{ user.name }}</p>

  <p>{{ user.age }}</p>
 </div>
</ng-container>
```

In the exmaple above, after data was recieved from backend,  
users that are **13 years old or older** will pass the filter.

_For more info about async pipe go to [Async Pipe Documentation](https://angular.io/api/common/AsyncPipe)_

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
   <td>objects</td>
   <td>An array of objects for filtering</td>
   <td>Any array of Objects</td>
   <td></td>
  </tr>
  <tr>
   <td>property</td>
   <td>Based on which property the objects should be filtered</td>
   <td>Any string</td>
   <td></td>
  </tr>
  <tr>
   <td>filterValue</td>
   <td>Value to filter objects based on filter condition</td>
   <td>Any value of types <code>string</code> or <code>number</code> or <code>boolean</code></td>
   <td></td>
  </tr>
  <tr>
   <td>filterCondition</td>
   <td>Type of condition for filtering objects</td>
   <td><code>'equal'</code>, <code>'notEqual'</code>, <code>'include'</code>, <code>'notInclude'</code>,
   <code>'equal/greater'</code>, <code>'equal/lower'</code>, <code>'greater'</code>, <code>'lower'</code></td>
   <td><code>'equal'</code></td>
  </tr>
 </tbody>
</table>

## Related Resources

To see my other packages visit [my npm page](https://www.npmjs.com/~amir141592)

I have a UI kit which you can see the demo [here](https://amir141592.github.io/Samurai-Project/)

## Future Plans

The following features will be added soon:

- Implementing advanced filter conditions

## Developer Words

I learned programming for free on the web. Now I want to return  
the love to programmers community. I plan to make a free UI kit for  
angular and this package is one of many free packages I will publish on npm.

## Contributors

- Developer: [Amir Allahdadian](https://github.com/amir141592)
