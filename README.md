# Responsive Tabindex

With CSS, it's possible to visually reorder elements based on the screen size. This JavaScript allows you to reset `tabindex` attributes to match visual order.

Currently, this uses two data attributes:

* `data-tabindex-value` is what the tabindex should be set to.
* `data-tabindex-min-width` is the minimum width required to change the value.

If the window width goes below the minimum width, the initial value of `tabindex` will be reset.

## Requirements:

* jQuery to use.
* gulp to contribute.
