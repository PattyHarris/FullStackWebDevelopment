# UltimateWeb Tutorial

## Boostrap 4

### Introduction

#### Downloading Bootstrap 4

Downloaded version 4 which is still in Alpha and moved the downloaded files to the "starter template" project - e.g. created a folder Starter Template.

#### Project Setup

1. Create the index.html and style.css files.

2. From the Bootstrap documentation, copy and paste the Starter template into index.html.

3. Make sure the index.html includes both the DOCTYPE and lang tags or otherwise you may end up with some odd Bootstrap styling.

4. The metatage viewport is used by Bootstrap to set the initial device to a mobile state since Bootstrap is "mobile first".

5. Since we downloaded the Bootstrap css, we can remove the link to the maxcdn (content delivery network) - so you end up with just 
<code>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="">
</code>

Then, to the href, add the reference to the downloaded bootstrap-grid.min.css (which is a min version that will load faster).
<code>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap-4.0.0-alpha.6-dist/css/bootstrap-grid.min.css">
</code>

Add links to the bootstrap-min.css and our own style.css as well.  Our style.css is last to allows us to override any of the Bootstrap css as we want.

6. In the JS at the bottom, the "tether" code is used for exact positioning.  The maxcdn is again removed and replaced with the downloaded Bootstrap JS, again refer to the min version for faster access.

7. And lastly, remove the "Hello World".

#### Overview of Bootstrap Components

1. See the online documentation - Components.

2. We'll be using the "Card" component later...

#### Understanding Boostrap Classes

1. Open the boostrap-grid.css.  You will see that it comes already with .container, a number of media queries (@media), .row, and all the .col* classes.

2. The bootstrap.css includes classes for html, body, etc.

#### Using the Grid System

1. Containers - there are 2 types, one regular and one "fluid".   If you're using the Bootstrap grid system, it is required that you use the container classes.

2. Add the container class to the styles.css and set the background color (so the container is obvious).

3. The container-fluid class takes up 100% of the entire viewport.

4. Add the row to index.html and then again add a background color to it in the style.css.  The height of the row is smaller than the container so you can see the row.

5. The only thing that can appear after a row is a col class.  

6. Bootstrap has some additional col properties.  You can specify a small, medium, large, or extra-large viewport.  For example, col-sm-6.  We used a attribute selector to set all classes = col,
e.g. [class*="col-"] {}  We also added a transparent border so we can see the columns.

7. There's also an "extra-small" col which has a size of 12 - for mobile phones, the col then stretches over the entire viewport.

8. New row with a "large" col size 4 (3 to make 12).

9. We modified these columns to indicate that col sizes for a smaller viewport - e.g. 
<code>
    <div class="row">
        <div class="col-sm-6 col-lg-4">Col 3</div>
        <div class="col-sm-6 col-lg-4">Col 4</div>
        <div class="col-sm-12 col-lg-4">Col 5</div>
    </div>
</code>

What happens here is that for the large viewport, you'll see 3 equally spaced columns in the row.  When the viewport is narrowed to a small size, you get 1 row with 2 equally sized cols and 1 row that takes up the entire row.

10. To override the col sizing, you use the following:
<code>
    <div class="row">
        <div class="col-6">Col 1</div>
        <div class="col-6">Col 2</div>
    </div>
</code>

No sm, md, etc is added.  Here, when the viewport is narrowed, the 2 columns stay as 2 columns.

11. You can also nest rows and cols inside of cols.

### Creating a Login Portal

#### Cards: Creating the Login Portal Box

1. Download or copy again the Boostrap files to the folder for this project.

2. Add again the style css as we did above (e.g. bootstrap-grid.min.css and bootstrap.min.css).

3. Add the container div.

4. Add the row div and then 3 col div's where 2 of the col div's are simply "col".
<code>
<div class="row">
    <div class="col"></div>
    <div class="col-8"></div>
    <div class="col"></div>
</div>
</code>

This evenly distributes the space on each side of the middle col - which has a fixed size (since we're not specifying sm, md, etc).

5. From the bootstrap documentation, copy the basic "card" component code - this includes both the card and card-block div's.
Hint - use the Beautify CMD+SHIFT+L to reformat the text - works as long as you don't highlight the code that's formatted incorrectly.

To see what properties the card has, use the Chrome inspector to check the padding that's already provided.

6. Project background: Add a new class, "signin-body" to change the color of the body tag (just for signin).

7. To move the card to the center of the viewport, we'll add a margin to the "container".  If we add a margin to to the "card" class, that would push against the "container" which has set height defaults.  Doesn't make much sense, but the end result is to move the card, we'll add a margin to the "container".  To do this, add a new class signin-container.

8. When allowing for flex, use a percentage instead of pixels.

9. Add some additional properties to the card - see the signin-card class.  The bootstrap card has some padding, but we added more.  The box shadow is a bottom right shadow with a 5px blur radius.  We use rgba() to allow for opacity.  The color is black (e.g. 0, 0, 0) and the opacity is 50% (e.g. .5).  To make sure the box shadow works on other browsers, we added their corresponding webkits.

#### Forms: Adding the Input Fields

#### Buttons: Adding the Signin Button and Labels


#### Grids: Finishing Mobile Compatibility


### Skate or Die Website

