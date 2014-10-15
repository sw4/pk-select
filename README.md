pk-slider
========

[![Build Status](https://travis-ci.org/sw4/pk-slider.svg?branch=master)](https://travis-ci.org/sw4/pk-slider)

Lightweight javascript input slider

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-slider/)


###Requires

- `pk-base.js`
- `pk-base.css`
- `pk-draggable.js`
- `pk-draggable.css`


###Usage

`pk.slider(opt);`

Where opt is an object consisting of:

```javascript
element: \\ DOM element to replace with a slider - the elements attributes are carried over
axis: \\ can be `x` or `y`, determines vertical or horizontal slider
name: \\ the name to use for the slider input form element (can also be set as attribute on original element)
units: \\ the units postfix
value: \\ the starting value (defaults to 0)
min: \\ minimum value (defaults to 0)
max: \\ maximum value (defaults to 100)
tabindex: \\ tabindex value (can also be set as attribute on original element) - defaults to 0
listeners: \\ object consisting of functions for slidestart, slideend and sliding - passed the originating element and event
```
