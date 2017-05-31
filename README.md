## What
Self-updating "slide-to-reveal" footer, like on the [Funkhaus site](http://funkhaus.us/) (scroll to the bottom of the page).

Use `dist/bundle.js` on production sites.

## How
```html
<div class="content">
    Your content here...
</div>
<div class="footer">
    Your footer here...
</div>

<script src="path/to/bundle.js"></script>
<script>
    new RevealFooter('.footer');
</script>
```

That's it!

## Options
Options are an object passed like this:
`new RevealFooter('.your-selector-string', { options })`
* `bottom`
    * Number of pixels for the footer to be place from the bottom of the screen. Default 0.
* `neighbor`
    * String with the selector for the element that will slide up to reveal the footer. Defaults to the footer's previous sibling.
* `neighborPosition`
    * String with CSS value for the neighbor's `position`. Default `relative`.
* `neighborZIndex`
    * Number with CSS value for the neighbor's `z-index`. Default `5`.

## Development
1. Clone this repo.
1. `npm install`
1. `npm run dev` for development.
1. `npm run build` for bundling/minification.
