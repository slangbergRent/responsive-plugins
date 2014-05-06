#Carousels, Modals, and Slideshows... Oh My!
These are the core prototypes for the responsive plugins for ag, the plugins are the following

##1. Responsive Carousel 
this plugins depdencies are: 

``` html
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/carousel.js"></script>
<link rel="stylesheet" href="css/carousel.css">
```

### Carousel options

| Option       | Description                                        | Type     | Default            |
|--------------|----------------------------------------------------|----------|--------------------|
| 'onImgClick' | fires on image click, passes in images index       | function | console.log(this); |
| 'direction'    | what direction is the scroll, either left or right | string   | left               |
| 'speed '       | the speed of the scrolling, not milliseconds       | int      | 60                 |


##2. Responsive Popup: 
this plugins depdencies are: 

``` html
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/popPop.js"></script>
<link rel="stylesheet" href="css/popPop.css">
```

### Popup Options:
| Option       	| Description                                              	| Type     	| Default                                              	|
|:--------------|:----------------------------------------------------------|:----------|:-----------------------------------------------------	|
| 'poptargetbox' 	| the selector for the target popup's parent targetbox     	| selector 	| #popup_id                                            	|
| 'poptarget'    	| the selector for the target popup                        	| selector 	| .popup                                               	|
| 'pagebox'	  	| the selector for the target pages top container div      	| selector 	| #page_box                                            	|
| 'beforeOpen'   	| caled before popup show, this is the target popup box    	| function 	| console.log(this.attr('class')+" is about to open"); 	|
| 'afterOpen'    	| called after pop up show, this is the target popup box   	| function 	| console.log(this.attr('class')+" has opened");       	|
| 'afterClose'   	| called after pop up closes, this is the target popup box 	| function 	| console.log(this.attr('class')+" has closed");       	|


##2. Responsive Slideshow (currently broken): 
this plugins depdencies are: 

``` html
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/jquery.glide.js"></script>
<script src="js/slidersetup.js"></script>
```

### Responsive Slideshow Options [See the plugins documetion here](https://github.com/jedrzejchalubek/Glide.js/blob/master/README.md):
| Option | Default | Type | Description
|--------|---------|------|------------
| `autoplay` | `4000` | int/bool | False for turning off autoplay
| `hoverpause` | `true` | bool | Pause autoplay on mouseover slider
| `circular` | `true` | bool | Circular play (Animation continues without starting over once it reaches the last slide)
| `animationDuration` | `500` | int | Animation time in ms
| `animationTimingFunc` | cubic-bezier(0.165, 0.840, 0.440, 1.000) | string | Animation easing function
| `arrows` | `true` | bool/string | Show/hide/appendTo arrows. True for append arrows to slider wrapper. False for not appending arrows. Id or class name (e.g. '.class-name') for appending to specific HTML markup
| `arrowsWrapperClass` | `slider-arrows` | string | Arrows wrapper class
| `arrowMainClass` | `slider-arrow` | string | Main class for both arrows
| `arrowRightClass` | `slider-arrow--right` | string | Right arrow class
| `arrowLeftClass` | `slider-arrow--left` | string | Left arrow class
| `arrowRightText` | `next` | string | Right arrow text
| `arrowLeftText` | `prev` | string | Left arrow text
| `navigation` | `true` | bool/string | Show/hide/appendTo bullets navigation. True for append bullets to slider wrapper. False for not appending bullets. Id or class name (e.g. '.class-name') for appending to specific HTML markup.
| `navigationCenter` | `true` | bool | Center bullet navigation
| `navigationClass` | `slider-nav` | string | Navigation wrapper class
| `navigationItemClass` | `slider-nav__item` | string | Navigation item class
| `navigationCurrentItemClass` | `slider-nav__item--current` | string | Current navigation item class
| `keyboard` | `true` | bool | Slide on left/right keyboard arrows press
| `touchDistance` | `60` | int/bool | Minimal touch-swipe distance to call event. False for turning off touch.
| `beforeInit` | `function(){}` | function | Callback before plugin init
| `afterInit` | `function(){}` | function | Callback after plugin init
| `beforeTransition` | `function(){}` | function | Callback before slide change
| `afterTransition` | `function(){}` | function | Callback after slide change
