peephole
========

I think we have all had that time, that time where we have user uploaded content which needs to fit 100% width and height in an element. Only to find out that the aspect ratio has been screwed up and now the image is all stretched.

Where do we turn then? We look into doing it with CSS only via complicated methods which only work given a finite use case, and ill positioned. Then that one guy says to us _**"Hey, why don't you just do it in Javascript?"**_. Well here it is...

peephole.js is a very small utility script which will both upscale and downscale images to fit inside a container, whilst preserving aspect ratio. Then once is done scaling the image it will then be nice enough to center it both horizontally and vertically for you.

So what do you need to do? This...

```
$('.my-container').peephole();
```

Demo: http://codepen.io/Jshthornton/pen/gcEAF

Interactive Tool: http://codepen.io/Jshthornton/pen/HagBp

peephole is a jQuery plugin which can be defined either as its own script element or via AMD. It has several options that can be passed into it to control how it operates:

`opts.elSelector` controls how to find the image in the container. Defaults to `> img`. Takes any form of jQuery selector (set to the containers context).

`opts.center` controls if peephole should centrally align the image after scaling it. Defaults to `true`. Accepts a boolean.

`opts.upscale` controls if an image which is smaller than the container should be enlarged (stretched) to fit the container. Defaults to `true`. Accepts a boolean.

`opts.downscale` controls if an image which is larger than the container should be shrunk to fit the container. Defaults to `true`. Accepts a boolean.

`opts.useClasses` controls if state classes should be added to the container to allowing for stateful styling. Such states are `.is-loading` and `.is-scaled`. Defaults to `true`. Accepts a boolean.

These options are passed in on invoke. Example: `$container.peephole({ upscale: false });`

### When to not use this
Whilst this script is small and does not take up many resources it still adds overhead. This script should not be used if there is a pure CSS alternative which does not affect accessibility (background-image + background-size solutions).
