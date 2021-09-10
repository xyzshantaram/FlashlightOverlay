# FlashlightOverlay

A canvas-based overlay for websites, intended to resemble a flashlight. [Demo](https://xyzshantaram.github.io/FlashlightOverlay/)

### Usage

First, add to your page via a script tag:

```html
<script defer src='flashlight.js'>
```

then, in JavaScript:

```js
const overlay = new FlashLightOverlay(
  document.body, /* parent element */
  100, /* The radius of the inner circle, completely lit up */
  200, /* The outer radius of the flashlight beam */
  "#000000", /* The color of the overlay. Must be able to be parsed into a CSS color. */
);
```

All arguments are optional, and they default to the values in the above snippet
if not specified. You can change them at any time by setting the innerRadius,
outerRadius, and color properties of the `overlay` object.

To enable the overlay:

```js
overlay.enable();
```

To disable the overlay:

```js
overlay.disable();
```

Copyright © 2021 Siddharth Singh

This is free, open-source software under the MIT license
