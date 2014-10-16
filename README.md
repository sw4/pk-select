pk-select
========

[![Build Status](https://travis-ci.org/sw4/pk-select.svg?branch=master)](https://travis-ci.org/sw4/pk-select)

Lightweight javascript input select

**Licensed under [cc by-sa 3.0](http://creativecommons.org/licenses/by-sa/3.0/) with attribution required**

#####[Demo](http://sw4.github.io/pk-select/)

###Features

- HTML form compliant (input value can be submitted like with any other `input` element

###Requires

- `pk-core.js`
- `pk-core.css`


###Usage

`pk.select(opt);`

Returns a new select object.

`opt` is an object consisting of:

```
element: \\ DOM element to replace with a select - the elements attributes are carried over
name: \\ the name to use for the select input form element (can also be set as attribute on original element)
value: \\ the starting value (defaults to null)
disabled: \\ boolean, whether the toggle is disabled (can also be set as attribute on original element)
tabindex: \\ tabindex value (can also be set as attribute on original element) - defaults to 0
listeners: \\ object consisting of regular event functions for input elements
```

###Methods

`select.val(value)`

Where `select` is a select object and value is either blank/null to get the current value, or a numeric value to set it

`select.disabled(value)`

Where `select` is a toggleswitch select and value is either blank/null to get the current state, or a boolean value to set it
