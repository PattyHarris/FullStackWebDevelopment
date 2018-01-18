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

1. First add the Devslopes img (in assests).  Here we're not making the img part of the form group - it will stack on top of the form group.  We added the bootstrap img-fluid class which re-sizes the img nicely inside the card.  Using the Chrome inspector, you can see that the img-fluid class has a max-width of 100% (the image can only take up 100% of the parent, which is the card block) and a height of auto (resizes when the viewport resizes).  

2. We also added a signin-img class to provide some additional features, such as padding.  The padding: 
    0 2rem 2rem 

means 0 from the top, 2 rem from the left and right, and 2 rem from the bottom.

REM: referes to the root font size - so if you're font is 12, 2REM means that the resulting value is 24.  R here stands for "root" - so root em.

At the end of this tutorial, we set the size of the image to 70% which means that whatever the viewport changes to, the image will only take up 70% of that width.

3. There are 2 buttons and a submit button on the form - so we'll use the form-group class.  Note the form we're building has labels as placeholder text which is not recommended by some Medium UX designers.

4. The image needs to stack ontop of the form group - copy and paste the form-group code underneath the img tag.  

5. We're not using the ID's (since we're not hooking up to JS), but it's a good idea to rename them from the default bootstrap IDs.

6. The form-group has "label" tags which are removed for this tutorial - as stated above, it would be better to use the labels and improve the placeholder text.

7. Change the input types to email and paswword (from text).

8. By inspecting the elements, you can see that the input fields take up 100% of the width - which we don't want - it's too big.  We'll add a class to the form since we want to control the form width, not just individual elements - signin-form. 

#### Buttons: Adding the Signin Button and Labels

1. Any input related elements, such as text boxes, submit buttons, etc. should be part of a form.  We'll add our button to the form.

2. We used just one of the primary buttons from the Component/Button documention.  This adds 2 classes, btn and btn-primary, the latter which, upon inspection basically provides background, border, and font color.  We'll get rid of that class and add a signin-btn class.

3. The signin-btn that we want is bigger and has a different background color.  The width is 100% which is 100% of it's parent which is the signin-form, 350px.

4. To make the button bigger, we just need to add the bootstrap class btn-lg which adds the additional padding we want plus a heavier font.

5. For the checkbox, see the Check Me Out check box in the Components/Form documentation (near the email text box example).  This includes div's for the form-check, form-check-label, and form-check-input.  

6. We needed to add a space before the "Remember me" text - otherwise, the text butts up against the checkbox - seems like there would be a better way, like adding some margin .... we did add a margin-bottom to the button to give some space between the button and any element below it.

7. "Need Help" Anchor tag: add a dead anchor to the "label" tag - the text here also needs a space at the front to add space.

8. The last thing is the anchor tag at the bottom - it's outside the form with a dead link.  See the class create-new-account.  Note the "display: block" which is needed to ensure the text-align has something to align against.

#### Grids: Finishing Mobile Compatibility

1. Changed the col-8 to col-md-8 to indicate that all viewports that are medium and larger will have a col-8 width.  This changes the small viewports to take up the full 12 value - so to make this explicit, we added col-sm-12 to the div.

2. The image is still too big (we resized it initially with CSS).  We initially used 70% - this is reduced to 50% which makes the image a bit fuzzy - the original image is very large so by shrinking it we loose sharpness.  Inspect the image and you'll see that it's now 280x175.  Double-click on the image in Finder and it will bring it up in Preview (on the Mac).  Use the tool to resize it to 280x175.  Use the Tools->Adjust Size menu option.

Now the image is the correct size and the css width element in the signin-img can be removed entirely.

### Skate or Die Website

NOTE: The downloaded assets don't contain the index.html or main.css, but these can be copied from the prior Login Portal Starter Template.


#### Working with Navbars

1. Setup the index.html with the Bootsrtap min versions of the grid, main CSS, and JS files.

2. We want the narbar that has the dropdown link as part of the bar - towards the lower middle of the documentation.

3. In the "nav" element, replace the "navbar-light bg-faded" classes with "navbar-dark bg-dark" classes - replacing the light navbar with a darke navbar.  NOTE: the class names have changed between the alpha and beta release of Bootstrap.

4. Replace the brand text - "Navbar" with "SKATE".  Replace the "Features" text with "Videos".  Replace "Pricing" with "Photos".

5. Dropdown Link: Replace the href with a deadlink (bootstrap alpha - not needed for beta).  Replace "Dropdown link" with "Swag".  Replace the action text with "Pants", "Shirts", and "Apparel".

6. The "Home" has an "item active" class which means that it's highlighted.  It also has a "sr-only" class is a screen reader class - this hides all elements except on screen reader devices.  See the online documentation for more details.

#### Using Carousels

1. Add a div with class = container-fluid around the nav elements - we should have added that first.

2. Add the Jumbotron heading after the nav element.  This has it's own container to help with the resizing of the content.  It includes a background color of light grey, which we'll change.

3. Add the jumbotron class to the main.css and add the text-align of center.  Instead of changing the background color, we need to override it with a background = none - you can't specify a background-color of none.

4. The jumbotron area is really a row with 3 columns - add a row with a col-sm-12 which will hold the jumbotron div which indicates that the jumbotron will take up the entire viewport for small screen sizes?

5. Add another row to hold the carousel - this time with the 3 cols, 2 of which are the empty cols.  We're using the carousel option that just has the prev and next controls.

6. Carousel: Change the ID from "carouselExampleControls" to "mainCarousel".  The first carousel-item has an "active" class which makes it the first slide in the series.  Note that there are 2 href's that use the old ID and need to be changed to the new ID - otherwise the Prev and Next arrows won't work

You should always keep 3 to 5 slides in a carousel.

The img has a d-block class which gives a display=block which keeps the image centered in the carousel.

The alt text is used if the browser can't find your image.

The image source is changed to use the images from the assets folder - they have already been resized for this tutorial.

Note the sr-only option divs.

Bootstrap has caption classes that will allow you to put captions ontop of the images.  See the carousel-caption inside the second carousel-item.  The classes "d-none d-md-block" indicate that the text will show for medium and larger displays, but for mobile, the text will be too small, and therefore will not show (e.g. d-none).

6. Resizing the carousel: Bootstrap doesn't resize the carousel correctly when the viewport is resized.  The images become squished - even though the img has a img-fluid class.

To fix this, you need to add some media queries that resize to 70%, for example, and then down to 50% for mobile - we didn't do this in the tutorial...

7. To break up the web page, the background color for the sectionLight class is set to a light grey color.

#### Nesting Rows and Columns

1. The second section has a 2 rows, where the first row has nested rows and columns.  The middle section of this first row has the nested rows and columns to hold text and images.

2. The col-md-1 offset-md-2 means that we're adding 2 empty columns to the left of the col-md-1, giving us a col of width 3.  This has the effect of a right adjusted image.  The middle column with the text is 6 and the last col is undefined (but will make it 3 since we have 3 + 6 + x = 12).

3. Center content: 2 rows with nested columns.  Pull the lorem ipsum text from www.lipsum.com.

4. Add the button after the sectionDark row.  The button is inside a div to allow us to add additional margins and padding.  Along with the Bootstrap classes, we added a coolStuffBtn along with the coolStuffWrapper classes.  We center the button with display = block and margin = auto.

This button will be used to show a modal dialog.  See next section.

#### Modals

1. To launch the model, added data-toggle and data-target types to the button.

2. Copy and paste the modal code from Bootstrap's online resource to the end of the container div.  Change the id's and their occurrences as needed.

3. The modal's X symbol is created with the "&times;" in the span element.   The "Save" button was removed since we didn't need it.

4. Modal Body - add a container-fluid div. We added a CSS override to center the modal-title, but for me, it's not centered unless I remove the X button.  The margin=auto is centering on the space INCLUDING the X button, so it's not centered.  I posed a question - we'll see...

It seems that the modal-header has a left margin of auto - I added an override and set the margin-left to -1rem.  That seems to fix it.

5. Model Form - copy and paste the simple form-group into a new row div following the image row div.  The form-group is wrapped by a formGroupWrapper to allow us to put some padding around the form group.

Rename the elements and text as needed.

#### Addimg Images and Buttons

1. This works on the 3rd section which has a set of 3 images with a button under each image.

2. To center the image, added an additional class - the display=block and margin=auto is used to ensure centering - this didn't help the modal title issue above.

3. The button in each column takes up the whole col regardless of the parent - which is a col-sm-12 col-lg-

4.  Since the button is a col-sm-12, it will take up the entire width of the column 4.  The button is supposed to have the same width as the image.  By playing around, a width of 54% is about right.  BUT, shrinking the viewport will also shrink the button so that it is no longer the same width as the image.  What you could do, which we didn't do, is do a media query such that the button width would be 100% for a smaller viewport.

5. Stacking the rows with the button allows the image to stack on top of the button when the viewport shrinks.

#### Sizing Modals

1. This section shows how to resize modals and embeds videos as well.

2. Copy the large modal CSS from the documentation and paste under the Cool Stuff Modal - I put this inside the container - Jason didn't....

3. To invoke the modal, add a data-toggle="modal" and a data-target=".kf-modal-lg" - we'll repeat this for the remaining buttons in the bottom of the 3rd section. 

Note that here we're using a data-target=class - Bootstrap allows for an ID or a class in the data-target.

Also note the name - kf-modal-lg - Bootstrap uses the "modal-lg" as an indicator that it's a large modal.

4. You Tube Video: Bootstrap 3 - Utilities->Responsive Helpers.  Bootstrap 4 -> Embed

5. Copy the 16x9 ratio example that includes the YouTube source video.  Replace that video with a video - search YouTube for Jason Brewer IntroClip.  Click on the "Share" button - this works better in Chrome.  You can then easily copy the link - what we really want is just the last part of the link - the whole link is a "share" link which isn't going to work here.

Just replace the part following "embed/..." note that src="" there's no "https".

No styling is added to the text on this modal, but Jason wanted to show that text can be added.

Add the data-toggle and data-target value to the corresponding button.

Repeat this for the other 2 modals...

#### Building the Footer

1. Footer is added above the modal section.

2. Recall the a contaner-fluid expands the entire viewport whereas the traditional container centers the content with extra margins on the side.

3. To resize images, recall that you can add a temporary class with a size of 50% (for example).  Once you get the percentage right, check the demensions which you then can use in Preview or some other tool to resize the image.

4. Added a footerImg class to add some padding around the image.

#### Working with Font Awesome Favicons

1. Font Awesome icons work like text so you can use text properties, such as text-align.

2. In the Bootstrap documentation, under Migration, the section on Components discusses the elimination of the Glyphicons icon font in Bootstrap 4.  They suggest you use either Octicons or Font Awesome.

3. On the Font Awesome website, you can either download the icon or use the CDN (content delivery network).  Jason prefers the CDN.  The CDN requires your email,which if you don't want to do this, Google w3schools font awesome - this gives you a page that provides the latest Font Awesome CDN...I chose this route.  Note that W3Schools is using version 4.7 - the latest is 5.  There's some deprecated styling too, so for example, the classes use "fab" for brands - this doesn't work in 4.7 - the latter here needs just "fa".

4. From the Font Awesome->Icons, search for the Facebook, etc icons and paste into the col that we set aside for the icons.  We added classes to set the colors as needed.

5. Jason overrode the fa classes to add margin=10px, but it seems to me he could have used the socialWrapper class instead (which is used to center the icons).

6. The socialWrapper has a margin=auto which centers, but I would have thought it would have spread the icons out over the available space?

7. To make the icons clickable, encompass the icon in a anchor tag - see the facebook example.  Note that it's important to use https://facebook.com and not www.facebook.com...

Use target=_blank to open a new tab.




