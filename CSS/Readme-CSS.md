# UltimateWeb Tutorial

## CSS - Inline, Internal, and External

1. Inline styling is when the style is added directly to the tag - you can use color names instead of the hex value.
<code>
    <h1 style="color: #D50000">Lets eat ice cream</h1>
</code>

Not really recommended, since you can see what would happen with a large web page with lots of similar styling.

2. Internal CSS is where you add a style that applies to a tag, such as this (again you can use hex or the color name,
such as mediumpurple) - note that the "style" tag goes in the "head" tag area:
    <code>
            <style>
                h1 {
                    color: #42A5F5;
                }
            </style>   
    </code>

And the h1 line becomes this:
    <code>
        <h1>In this case, use the internal style.</h1>
    </code>

Again, this method isn't recommended for large projects.

3. External CSS uses a file.  Here you add a style.css file and then link to it using the link tag (again, inside the "head" tag).

## CSS - Element, ID, and Class Selectors

1. By "element", they mean things like "body" or "h1".  

2. Classes are set using class="classname" where the "classname" is found in the CSS file, and begins with a "."  The example here creates a blue square - centered.  The margin element creates equal space of each side.

    <code>
        .square {
        width: 100px;
        height: 100px;
        background-color: #29b6f6;
        margin: auto;
    }
    </code>

3. ID's should be used sparingly and the names need to be very unique.  IDs allow us to interact with the HTML with Javascript.  IDs are like classes, but begin with "#".

## CSS - Colors

1. Different ways to designate colors:
    - color name (from a known list of names)
    - hex value
    - rgb value - note that Sketch will give this to you in the correct format

2. For a discussion on gradients, see https://www.w3schools.com/css/css3_gradients.asp

3. Not all browsers support gradients.  There's an example set of backgrounds that includes a default color for browsers which don't support gradients as well as the special prefix needed for some browsers.

4. The syntax for a linear gradient, takes a starting point and an ending point - here use the W3 School HTML Color Picker:
<code>
    background: linear-gradient(#00ccff, #b3f0ff);
</code>

The linear gradient is a top to bottom gradient as default.  You can control the direction with "to right" and "to left" parameters or "to bottom right", etc.  See the online documentation for details.

4. Shadows can be applied to almost all elements (e.g. fonts, images, etc.).  The shadow tag works on the vertical and horizontal axis.  In this example, its 2px out from the vertical and 2px out from the horizontal - so the bottom right.  If these were -2px, -2px it would be the top left.  To see the affect, this needs a color - in this case black.
You can blur out the shadow with the 3rd parameter, in this case 5px - the black color is blurred out by 5px.

NOTE: NO COMMA between the parameters...:
<code>
    <h1>
        text-shadow: 2px 2px 5px black;
    </h1>
</code>

To the container, you can give a "box-shadow" using the same type of parameters.

## CSS - Backgrounds and Borders

### Backgrounds

1. For the "background" tag, there's a number of related tags - see the list when you type "background".  We're adding a background-image to the "body" tag using the url() function - find some image using google and copy that URL.

2. We're supposed to pick a "small" image - http://www.webdesignhot.com/wp-content/uploads/2012/02/Abstract-Blue-Background.jpg
which is 790x592 - use "Save As" to save the image to your project (instead of using the image's URL).

3. To handle the background repeat, first comment out the "container" class - "/" + CMD + alt
Added 2 background properties to the "body" tag:
    - background-repeat
    - background-size

The background-size property only works with images.

You should use an image in reality with the appropriate dimensions or resize the image so that it sizes properly in high definition - otherwise, it will be blurry (like the image is now)

You can also apply these same properties to a class such as the container class.

### Borders

1. Using another "div" element add an "img" element with a  class "imageBorder"

2. The border property has a number of specific border properties.  To use the generic border property you supply a width (2px), type (solid), and color.


## Challenge 1

Using the given index.html, add some colors and backgrounds according to the class instructions.

## Inspector Tools

### Chrome

1. By default, CSS puts a "display" tag of "block" on a "div" tag - you can see this by inspecting the web page elements - in the Inspector window, select "HTML" and "Styles"

2. If you hover over the h1 element, you'll see it's shown in blue with an orange border - the latter represents the margin.

3. The bottom diagram shows the deminsions of the selected element.

4. The far left icon on the inspector menu is an inspector tool which allows you to select elements by hovering over them - this is the small square with the diagonal arrow on it.

5. The next menu item allows for a mobile view vs browser view.  Our webpage isn't setup for mobile, so using Devslopes.com, select the menu.  At the top of the mobile view, you can pick which device (we used iPhone 6 Plus).

### Firefox

1. Similar to Chrome - also has an "Inspect Element" menu and brings up a similar developer interface.

2. The "Responsive Design Mode" menu option works like the mobile/webpage view on Chrome.  Use the "hand" menu to "Simulate touch events".  You need to refresh the page first, so CMD+R and then click the "hand" symbol.

### Safari

1. Right-click and Inspect Element - worked for me right off since I had already checked "Show Develop" menu in Menu bar in the Advanced menu settings.

2. To inspect individual elements, pick the "scope" image on the right.

3. The "Enter Responsive Design Mode" is a menu option under the "Develop" menu.  This gives you more mobile and desk top views.  From there you can right-click and Inspect Element.

## CSS - Combinators using Descendant and Child Selectors

1. This tutorial is about child elements.  
Move the "img div" to the "container div" - e.g.
<code>
      <div class="container">
          <h1>This is inside the container class</h1>
          <h2>Another bit of text</h2>
          <div >
            <img src="BorderImage.jpeg" class="imageBorder">
          </div>
      </div>
</code>

Also added a un-ordered list with a ordered list as a child element.

2. Descendants mean that all descendants of a particular element take on the property - in this case, we added a property to the "li" tag - it not only applies the "ul li" tag, but also the "ol li" tag that's a child of the "ul" tag.

3. Child properties are designated using ">" and apply only to 1 level (whereas the descendants applies to all sub-levels).

## CSS - Grouping

1. Grouping is used to reduce code redundancy.  Also helps the browser load the page faster if the CSS file is smaller.

2. For example, if you had a h1, class, and id with all the same properties, you could write:
<code>
    h1, .myClass, #myID {
        color: #ffffff;
    }
</code>

## CSS - Specificity

1. Adds a weight value to different selectors - e.g. element selectors, class selectors, and id selectors to determine what style rules should be applied.

2. There's a rating to the selectors in this order:

style->id->class, psuedo class, attribute->element

If the element appears in multiple declarations, the one that appears last in the CSS file wins.

The value of an element is hard to describe - this has a vlaue of 1
<code>
    h1 {
        color: white;
    }

    /* This has a value of 2 since there are 2 elements.*/
    div h1 {
        color: green;
    }
</code>

If you had an h1 inside a div, any properties in the above would apply to that h1.  If there's an h1 outside the div, those same properties wouldn't apply.

<code>
    <div>
        <h1>
            This would be green.
        </h1>
    </div>
    <h1>
        This would be white.
    </h1>
</code>

3. The hierarchy of the selector doesn't affect the specificity.  So if you have the following:
<code>
    html, h1 {
        color: green;
    }

    body, h1 {
        color: white;
    }
</code>

The h1 color would be white since the value of the each is 2.  The hierarchy doesn't matter.

4. In this case the point value is 11 and 2 - the 11 is determined by giving a 1 to the class and a 1 to the element (by position in the chart).  
<code>
    .container, h1 {
        color: green;
    }

    div, h1 {
        color: white;
    }
</code>

5. Another example is shown in the attached image - shows show to determine the specifity when using a attribute, e.g.
<code>
    #foo {
        color: green;
    }
    /* This is an attribute */
    [id="foo"] {
        color: red
    }
</code>

### !important rule

1. According to SO: The !important rule is a way to make your CSS cascade but also have the rules you feel are most crucial always be applied. A rule that has the !important property will always be applied no matter where that rule appears in the CSS.

2. For example, assume the following HTML and CSS:

code>
    <div>
        <h1 style="color: yellow">
            This would be yellow.
        </h1>
    </div>
</code>

CSS File:

<code>
    h1 {
        color: white !important;
    }
</code>

Normally, the above "style" selector would override anything else since it would have a value of 1000.  But since there's an "!important" attribute on the h1 element, that overrides the "style" selector.

3. Using the "!important" attribute is not recommended since it will mess up the cascading style sheets.


## Challenge 2

Has 2 parts with a starter index.html and a blank main.css.  See online instructions for details.

## Text Styling and Formatting

### Font Family

1. Another Brackets command shortcut: if you click on the end of a line, and then CMD+click on subsequent ends of lines, and then CMD+/ you get each line commented out.  This also works for any editing.  Just click, and then CMD+click.  Anything you do next applies to all lines.

2. For this tutorial, a bunch of stuff was commented out - see the CSS file for details.

3. Font families are usually setup inside the "body" tag or the "html" tag.

4. When working with font families you should always specifiy more than one in order to have a default font when the browser doesn't support one of the families.

5. Fonts with more than one word are quoted, e.g. "Times New Roman" - to test this, inspect the element and check and uncheck the element - you'll see it changes just a bit.  Since it doesn't recognize Times New Roman, it's using serif, which by unchecking defaults to sans-serif.

### Font Size

1. When you set a font size with pixels, it's a hard value, regardless of the viewport size.

2. If you inspect the h1 element, its size is 2em
The default font size of a browser is 16px or 1em.  So this makes the h1 selector, 32px.

### Font Style

1. The styles are italic, normal, and oblique, where oblique is like italic but doesn't lean as much.

2. In the CSS here, we have the following:

<code>
    h1, h2, h3 {
    color: #01579B;
    font-style: normal;
    }
    h2 {
        color: #E84900;
        font-size: 30px;
        font-style: oblique;
    }
</code>

Since the h2 point values are the same, e.g. 1, the second one always overrides the first one.

### Text

1. "justify" sets the text with equal margins are each side.  From the W3 School: Stretches the lines so that each line has equal width (like in newspapers and magazines).

2. Using the "a" (anchor) selector, add an anchor with an href that has a dead link (e.g. #).  When you inspect the element, you see that anchors have a default underline as a text decoration:

<code>
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: auto;
        text-decoration: underline;
    }
</code>

You can override that undeline by setting up the CSS:

<code>
    a {
        text-decoration: none;
        font-size: 20px;
    }
</code>

3. Along with letter spacing you can do word spacing.  Text transform allows you to perform various transformations on the text independent of how it's typed in (e.g. capitalize).

4. Using a class="formatClass", with a number of nested "div" selectors.  The reason for the "div" selectors is that it has a display of "block" on it which will help to show the differences in properties better.

## Google Fonts

NOTE: this sections uses googleFonts.css instead of main.css - that way I can keep both.  

1. Using https://developers.google.com/fonts

2. In Guides section, there's an Overview section which shows how to start using Google fonts in 2 steps:
<code>  
    /* Step 1 - add the link */
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Font+Name">  
    /* Step 2 Style an element with the requested web font, either in a stylesheet */
    .css-selector {
        font-family: 'Font Name', serif;
    }
    /* or with an inline style on the element itself */
    <div style="font-family: 'Font Name', serif;">Your text</div>
</code>

3. Picking 3 fonts from the Font page, the "Fonts selected" dialog tells you how to setup the link for your page (https://fonts.google.com)

4. Copy the link and add it to index.html above the main.css link.

5. Instead of removing a bunch of stuff from the main.css file, I made a copy - googleFonts.css

6. You can add font properties in the "link" attribute, for example FontName:300 for bold.

## Images

1. Commented out just about everything on the index.html so we can focus just on the image.  Comment out the border in the main.css as well.  

2. First working with round edges which can be set either with a pixel amount or a percentage.  The pixel amount shaves off the pixel amount off each corner.

3. If the image is a perfect square and you take off 50% (e.g. a percent amount), you get a circle:

<code>
    .imageBorder {
        border-radius: 50%;
        width: 500px;
        height: 500px;
    }
</code>

4. For a thumbnail - add a solid border which is padded off the main image.

<code>
    .imageBorder {
        border-radius: 10px;
        width: 500px;
        height: 500px;
        border: 2px solid #84B4C2;
        padding: 5px;
    }
</code>

5. To make the image responsive, that is, re-sizes when the browser is res-sized, we add the following.  The width will fill up the entire viewport - which is the div that it's in.  Note the "div" selectors have "block" properties which mean that extend across the entire browser window.

<code>
    img {
        max-width: 100%;
        height: auto;
        padding: 5px;
    }
</code>

6. opacity - added to the "img" selector.  Has a value between 0 and 1.  A value of 0 will make the image 100% tranparent.

### Centering Images

1. Currently, the image is centered beacuse we have
<code>
body {
    background-color: #E1F5FE;
    text-align: center;
}
</code>

2. If you remove the above "text-align" property, you'll see that the "div" selector block property extends the viewport.
By adding the same "div" property of
<code>
    display: block;
</code>

to the img selector, you'll see when you now inspect the image, there's an orange section which extends the viewport.  That's the margin.  Now you can add a "margin" property of "auto" which will create an equal margin on the image:
<code>
    display: block;
    margin: auto;
</code>

## Margins and Padding

1. Make a duplicate of the index.html image and change their size from 500px to 200px in the main.css:
<code>
    <div >
        <img src="BorderImage.jpeg" class="imageBorder">
    </div>
    <div >
        <img src="BorderImage.jpeg" class="imageBorder">
    </div>
</code>


### Margin

1. Margin places space around an element.  Right now the 2 images are next to each other vertically.  

2. Margins can take a pixel or percentage amount.  Here we've made it 60px.  You can also use margin-bottom, margin-left to specify margins on the noted side.

3. By inspecting the image element, you can see the margin that is created.

### Padding

1. Added a button to index.html with a class "paddingClass".
Note that this still uses the googleFont.css file.

2. Padding creates space within an element whereas margins create space outside of elements.

3. You can add padding like this:
<code>
    padding: 20px;
</code>

Or like this which adds padding of 10px to the top and bottom and 20px to the left and right:
<code>
    padding: 10px 20px;
</code>

The values work top, right, left, bottom, left.  If you add a 3rd value, e.g. padding: 10px 20px 40px; the "40" is for the bottom value.

## Rows and Columns

1. See the rowsCols.css file and rowsColsIndex.html.  The main files were getting too complicated.

2. With (now) 3 images, we'll put them in a row to allow better image positioning.

3. See the rowClass which expands the entire viewport and allows positioning of elements within it.  The rowClass has a property of flex which allows it to expand with the images.

4. To allow the rows to stack on top of each other, we added the following class which says that every time we create a row, we want something to happen after it.  The "clear: both" property says to clear any float properties (left and right) of any element that might be inheriting float properties from their parent so that it doesn't mess up the row content (?).  To make sure the row content is empty when we start, we add the content: ""

<code>
    rowClass {
        display: flex;
        width: 100%;
    }
    rowClass::after {
        display: block;
        clear: both;
        content: "";
    }
</code>

5. The colClass(s) allows positioning of the content within the rows.  Jason is basically creating a 12 column grid system.

6. To make sure each element fits nicely in each cell, we added the following which basically works on the element existing padding to make sure it's not resized but keeps it's current dimensions - from W3 School: "The width and height properties (and min/max properties) includes content, padding and border, but not the margin".
<code>
    * {
        box-sizing: border-box;
    }
</code>

7. The last class is just so we can see visually what's going on in the browser.  This is an attribute selector that takes all classes that begin with colClass- and add a red border and padding:
<code>
    [class*="colClass-"] {
        border: 2px solid red;
        padding: 15px;
    }
</code>

8. Rows should always be used to separate content on a web page.  Rows should always contain columns.

9. The classes assigned to rows need to add up to "12", so we assign colClass-3, colClass-6, colClass-3 (e.g. 3 + 6 + 3 = 12).  
Doesn't make sense yet.

10. Next we change the img in the CSS to change the margin to "auto" and to get that to work, added the "display: block" - this makes the images centered.

11. To make the columns mobile responsive, we added a float left.

12. The second row has colClass-2, colClass-6, and colClass-4.  The class shows 2 + 7 + 4, which as noted in the Q&A is wrong and could have wrapped to the next line.

### Quiz:

1. Column widths should always be set with a percentage to allow them to flex - missed this on the quiz.

2. Use either width: 100% or max-width: 100% to enable an image to fit 100% of it's element.

### Intermediate Challenge

The intermediate challenge is to create a web page that makes use sof the column and row CSS we learned.


## CSS Website - Navbar

1. Uses the "nav" selector with a list of links.

2. Starting with the style.css, add a header, nav, and footer selector with a "display: block" to ensure they stack on top of each other.

<code>
    nav, header, footer {
        display: block;
    }
</code>

3. To the body selector, we're adding a bit of space around the text and setting the margin to 0 - this ensures that browsers don't add any margin of their own.  Notice for the line-height there's no px, etc. specifier for this case.

<code>
    body {
        line-height: 1;
        margin: 0;
    }
</code>

4. In the "nav ul" selector, we added a "overflow: hidden" which tells the browser to hide the element if it can't fit on the page (for a repsonsive web page).  This means the user won't see part of an selector to scroll over to see it (?).  See the W3 School for more details.

Margin and padding are 0 to make sure the content is edge to edge and doesn't inherit from anything else.

5. To see the affect of margin: 0, inspect the page at this point and uncheck the margin selector - you'll see the Chrome adds a bit a space around the gray navbar area.

### Float

1. Style the list items - set the style to list-style: none to ensure that no "bullets" are added.  The anchor (a) selector ensures that as well, but this will make certain no bullets are added - here we also added the class since some of the navbar will float left and some right:
<code>
    ul.topNav li {
        list-style: none;
        float: left;
    }

    ul.topNave li.topNavRight {
        float: right;
    }
</code>

Oddly, the li for the float: right were set on the li (as the class - seems off).

### List items text

1. Add the text-decoration: none to remove the underline.

2. Add a font size by either setting the pixels or a min-height.  The latter ensures the font size will never be less than 16px if the browser shrinks.

3. Added a hover action (e.g. a:hover), changing the background color to a blue and text of white - blue looks awful...

### Making the Navbar mobile responsive

1. When the browser shrinks, all the left menu items disappear except home, the right items disappear, and a hamburger menu is put on the right.

2. The hamburger menu uses a unicode character.  Search for "unicode table" - https://unicode-table.com/en/ and search for "trigram" - select the "trigram for heaven" which shows an HTML code off "&#9776;"
<code>
    <li><a href="">&#9776;</a></li>
</code>

3. To hide the hamburger menu on the desktop:
<code>
    ul.topNav li.hamburgerMenu {
        display: none;
    }
</code>

4. A media query checks the screen widths of desktop, tablets, and mobile phones - using this we can hide the menu items and show the menu.  See the W3 School for more information.  It has a better explanation of "breakpoints" and designing mobile responsive.

This uses a "not selector" as well to enable everything to be hidden except the home menu item.  The following tells the browser to hide everything except child #1:
<code>
    @media screen and (max-width:680px) {
        ul.topNav li:not(:nth-child(1)) {
            display:none;
        }
    }
</code>

5. NOTE: IMPORTANT point here is that when building a web site, you build one part (e.g. the nav bar) for the desk top and then right away make it work for mobile.  Don't wait until the entire page is done before making it mobile responsive.

6. When the display shrinks to 680px, we want to show the hamburger menu.  We change the display to "block" since when it's block you can more easily position the element - this is added to the @media break.  We also need to add the float:right, since otherwise the li.hamburgerMenu inherits the float:left from the ul.topNav class.
<code>
    ul.topNav li.hamburgerMenu {
        display: block;
        float: right;
    }
</code>

#### Handling the Hamburger Menu

1. You "could" build the drop menu elements so that they'd show when the menu is clicked, but them it would change the whole size of the nav bar and push down the rest of the web site.  The better way is to show only when it's clicked using a bit of JS.

2. Although it's not recommended to use selector ID's, that's how javascript interacts with elements on a page.

3. Recall the the ID name must be unique - here we've name the ul element "dropdownClick".

4. Generally, you want your JS in an external file as is the CSS.  Since we're learning concepts, we're adding the JS as embedded in the HTML.

5. To make this all work, add "onclick" to the hamburgerMenu anchor.  The JS is added the "script" element:
<code>
    <li class="hamburgerMenu"><a href="" onclick="dropdownMenuClicked()">&#9776;</a></li>   

    <script>
        function dropdownMenuClicked() {
        }
    </script>
</code>

The idea here is that when the menu button is clicked, we'll create a new class (called "responsive") for the ul that will have the special styling properties to make it appear as a dropdown menu.  This will be appended to the topNav class - note the space before the "responsive" name - it's just as though we assigned an additional class to the ul selector in HTML.

NOTE: === is equal value and equal type.

The "responsive" class is then available in @media.

6. The responsive li has to have a float:none to override the float:left assigned by the parent.  Also, we make the display:inline to make the li elements stack on top of each other.

7. The href for the hamburgerMenu li "was" empty, and with that the browser is confused since it doesn't know where to go, so we added a bit of a hack: javascript:void(0);  This tells the browser that the path is undefined and to stay on the page that you're on.

8. The last thing is to make sure the hamburger menu doesn't move left with the other li elements.  To do that, we need to work with it when it's a responsive element:
<code>
    ul.topNave.responsive li.hamburgerMenu {
        position: absolute;
        top: 0;
        right: 0;
    }
</code>

## Creating the Form Group - The First Column

1. The form area has a gradient background and 2 columns.  Each column will be inside a "container".

2. The container will have a width 100% to take up all the browser viewport and a margin: auto - this divides the any margin space eveningly around the element - e.g. horizontally centers the element in the container.

3. Padding is added to the container to give some space on the top and bottom of the container.

4. The gradient only applies to the first container so it's ok to use an ID.  See the "custom styles" section of the CSS.

5. Next add the rows and columns.

The rows have "flex" property which allows for additional properties, one being "flex-wrap: wrap" which tells the browser to wrap the elements if the display shrinks.  The other property that works in conjunction with "flex" is "align-items: center".

6. The h1 tags are within their own "<div>" so that if in the future you want to add a special style to them, it's already setup to do that.

7. The "large" class makes the "h1" selector a bit larger.  We also reduced the margin to 0 and then added "line-height".  When working with text, use "line-height" to add space instead of "margin".  

### Attribute Selector

1. For the input selectors, we can specify the type of input with the following - this adds an style to the input selectors with a type of "text":
<code>
    input[type="text"] {

    }
</code>

2. Currently the width for the input selector is set to 400px, but later on we'll set a @media break to setup the width for mobile...

3. Recall that we use padding to increase space within an element - so here we add some padding of 5px to add space inside the input selector.

### Form H2

1. Make the "h2" elements white inside the form.
The CSS makes the "h2" elements inside any "form" white, which is OK in this case:
<code>
    form h2 {
        color: #fff;
    }
</code>

2. We'll set an extra class to the col-6 using the "margin-left" with a percentage to enable the "div" to flex.

## Working with iFrames - Column 2

1. There's supposed to be some "share" button to allow you to copy the URL, but I don't see it with my videos....only works with public videos.  You'll see a "share" button, that then allows you to select "embed" which has the "iframe" code.

2. As the code stands now, we have the following:
<code>
    <div class="row">
        <div class="col-6 leftSideCol"></div>
    </div>
</code>

But what this is doing, is shoving the column left, but not the content - don't really get that...but, the end result is that the video appears below the form and to the left.

So we moved the leftSideCol class to the "div"s for the headers and form.  Now the 2 columns look pretty good.  

3. We need to make the video mobile compatible - right now, it moves ontop of the form.  The reason is that the col-6 class has a width of 50%.  For mobile, we need the width to be 100% which will force the video to move down.

So, to the @media, we add the col-6 class with a width of 100%.  We also need to add the leftSideCol and rightSideCol classes and change the percentage to a fixed 15px.

4. The input forms are also too large for mobile and are re-sized in @media as well.

5. We added another "div" to the iframe so that the outter "div" is used for alignment, and the inner "div" will be used to set some additional style properties. For the "videoContainer", we want the video to stay in the same spot (e.g. not move when the browser is resized) and there's quite a bit of margin on the right.  We have to grab BOTH the videoContainer class AND the iframe to make it take up the whole column - e.g. 100%.  If you just specify the videoContainer class, the video doesn't resize.  We also specified that if there is overflow, e.g. the browser would show a scrollbar, we clip the overflow instead of allowing the scrolling:
<code>
    .videoContainer iframe [
        postion: relative;
        width: 100%;
        margin: 0;
        overflow: hidden;
    ]
</code>

## Images and Box Shadows

1. The next section of the web page starts off with a "header" selector.  This acts like a container and has some special properties such as allowing for addition "h1" and "h2" elements as well as adding a logo.  We want this to be outside the actual "container" for this area since the container will have some columns.  

Headers cannot be nested inside footer, address, or other header tags.

2. Since the header is a container, it has a display of "block" which makes it easy to move the text within it.  
Add a "text-align: center" to center the text.

3. Next up, add a "container" that will hold 3 columns - this
container will sit under the header.  Each column contains a
rounded corner border (box), icon, header text, and supplemental text.

4. Add the box as a class with the following properties:
<code>
    div.box {
        background-color: #fff;
        box-shadow: 0 0 0 1px rgba(0,0,0,.15)
    }

</code>

In the browser, seach for "css shadow generator" - this brings you to www.csmmatic.com/box-shadow
On this page, you can see all the properties that are used above.   
    - horizontal length = 0
    - vertical length = 0
    - blur radius = 0
    - spread radius = 1px
    - rgba(0,0,0,.15) - the first 3 0's are the color and
    the last value is the opacity (or transparency)
    So the 0's here set the shadow color, background color, and box color to "off" - essentially turning off these
    attributes.  The last item is the opacity which is
    set to .15

And then he added another set of this same data - that
doesn't make sense - so now the box-shadow is
<code>
        box-shadow: 0 0 0 1px rgba(0,0,0,.15),
            0 2px 3px 0 rgba(0,0,0,.1);
</code>

5. Add the devIcon - added an "icon" class for the image so that we can make sure that the image is always at 100% when the display changes size - meaning the image will flex when the screen size changes.

6. Add the label - could be in a div tag.  We need to increase the font size and make it bolder.  See class for "label".

7. To add the placeholder text, lorem ipsum, (www.lipsum.com), copy from the standard paragraph on that page.  The paragraph text needs to be bigger, see class.

8. To center everything in the box, add a text-align: center to the box class.

9. Now that the column is set, copy and paste it 2 more times to add the additional 2 columns.  Since the text is too big now, delete after "dolore".

10. Padding and margins to box element: to all the column classes we're adding "box-size" which effectively adds some padding as part of the deminision - meaning that the size includes the padding.
<code>
    box-sizing: border-box;
</code>

Then, to the box class add the margin (24px) and padding.  The padding is set to specify the top, right, bottom, and left:
<code>
    padding: 36px 24px 40px 24px;
</code>

11. Mobile adjustment: if you shrink down the web page now, it's all messed up.  So we'll fix it like we did with the input boxes - there we added a col-6 modification to the mobile area.  We'll just add col-4 to the same class.  We also adjusted the box class for mobile by shrinking the padding and making sure the display is "block".

12. To round the box, add a border-radium of 7px.

13. Lastly, add a button by adding another row and a column of 100% - col-12.  We need the button to be blue, big, and centered.  See the button class.  We added padding of
15px 60px which, when using 2 values only, sets the padding for the top and bottom to 15px and the left and right to 60px.  RECALL that padding is internal and margin is external to the element.......

We then used the button.learnMore class to center the button by using the "auto" property which evens the space around the element.

14. Mobile adjustment for the header - it's a bit large for mobile, so we'll set the "Standards of Awesomeness" header smaller for mobile - see the section2Header.

## Working with Text and Image Spacing

This section of the webpage is just some text with a image to the right.

1. First add the dividing line with the "hr" tag.

2. Add the container class div.  Initially we neglected to put in the row div which is necessary for the columns to size properly.

3. Add a col-7 which contains a "article" tag - this is available in HTML 5 and is used for things like blog posts, news article, or comment.  The paragraph (p) tag is added since it includes top and bottom margins.  Still needed to make the font larger and add some padding around the text - see the "article p" class in styles.css

4. If you inspect the article element, you will see the orange is the margin, green is the padding, and blue is the element.  You can also see that this p tag inherits overrides the font size of the prior p tag above it but does inherit the line height of the prior p tag in styles.css.

5. For the slope png, added a class slopeIcon.  The image has a lot of space around it - by adding a margin of auto, that will evenly distribute the space around the image.

6. Added a box shadow using -2px -2px which effectively pulls the shadow up and to the left.  The blur is 20px and the spread is 2px.  The color is rgba(0, 0, 0) which is
        0: shadow
        0: background
        0: box
        .15: opacity

The second rgba is a second shadow that added.

7. Adjust for mobile by adding the col-7 and col-5 to the mobile area along with the other col classes there.  Also added changes for the font-size of the article p tag.  The image was overflowing, so we needed a div.slopeIcon img selector to set the width to 100%.  To add some space, we needed to add a margin to the parent div (e.g. slopeIcon class), not the img itself.  Otherwise, the image would take up more space than the column.

## The Footer

The footer is the last section of the web page.  The "footer" tag is new to HTML 5 and is a container with a display value of "block".

1. Content: author information, contact information, copyright information, etc.

2. The footer is basically a footer tag that contains a row with 4 columns (in this case).  Each column has a header followed by an unordered list.

3. Added a "footerClass" to modify the style for the footer area.

4. For the unordered list items, remove the bullets and align them to the left so they line up with the header.  At this point, with just setting the text-align to left, the list items are still shifted - by inspecting the ul element, you can see that there's automatically some padding on the left. To get ride of the padding, we set the padding to 0.

5. After adding the remaining 3 columns, they are still shifted too far left.  We "could" add a margin, but when you do that the footer itself is shifted, leaving a blank white space to the left.  So what we want is padding (on the footer class) - although I think 10% is a bit much.

### Footer in Mobile

1. This time, instead of modifying the col-3 class (as we did with some other col-* classes), we'll add another "div" class - mobileStack --> footerMobileClass (my name for the class). We set this class with a width of 50% so that columns stack on each other.

2. Adding a class to the div is the recommended method since you may want to use the col-* class elsewhere.  You may not want the col-* class to have a width of 100% or 50% in all cases.
