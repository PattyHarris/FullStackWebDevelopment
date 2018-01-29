# UltimateWeb Tutorial

## Saas

### What is Saas

### How to install Sass and compile it to CSS

1. Requires ruby which comes with the mac:
<code>
> sudo gem install sass
</code>

2. In this section, Jason is using Atom.  So, here we are...needed to add some packages to help with auto-complete and beautify (CTRL+ALT+b for the beautify).

Create a temporary folder, IntroProject, and using the terminal, added 2 files index.html and styles.sass.  We'll play around with a few settings here.

3. Add a watcher on the Sass files so that when a file is changed, it will force a recompile.  From the folder where you want to put the watch:
<code>
> sass --watch styles.sass:styles.css
</code>

4. To get the list of colors, installed the css-color-name package.

5. In this section we played around with a few things to get the hang of compiling the .sass into css.

### Your FIRST Sass Website!

1. First set the watch on the folder.  Jason provides starter files.

2. Variables: Jason likes to put 3 tabs after the variable name - not sure why.

3. Mixins are like functions.  We created a "shaping" function with parameters for height, width, radius, background color, and font color.  Mixins are defined using an "=" and are called using a "+" - e.g +shaping()

4. To position the ipsum text behind the What's Up text, we added a position=relative and a z-index =-2.  Note that the positions are different than what Jason used due to his screen resolution.

5. Also, in the btn-main mixin we used display=block and margin=auto to center the buttons - just for this example.  We should be using rows and cols....

6. We added a "hover" to the btn-main mixin - we never went over "hover's" - basically it allows you to do things when the cursor hovers over the element.  In this case, we're lightening the background of the button.

The "&" allows you to write pseudo classes on a class - as in this case, using "hover" - Google on sass & character - it means different things in different contexts.

### Different tools to compile Sass

1. Using the terminal - you must run this command each time you want to compile:
<code>
>sass input.sass output.css
</code>

2. To add the watch, it's as before:
<code>
>sass --watch input.sass:output.css
</code>

3. If you Google OSTraining, there's a page that lists the top 10 packages for compiling LESS and SASS.
Jason uses SimpLess, which is free.  All work differently.

4. Atom has packages for compiling SASS - Brackets probably does as well.  Jason recommends the sass-autocompile package, but read the documentation since it does required additional installs.  He actually prefers the terminal - works seems fine to me...

### How to structure your Sass

1.  Inside the project folder, create sub-folders base, layouts, modules.  This uses a method called SMACSS - Scalable and Modular Architecture for CSS.  See smaccs.com for documentation.  

2. Base rules: "applied to an element using an element selector, a descendent selector, or a child selector, along with any pseudo-classes. It doesn’t include any class or ID selectors."

3. Layout rules: "The major components are referred to as Layout styles."  For example, headers, footers.  Here you always want to use the ID selectors (e.g. #header)

4. Module rules: "This is the meat of the page. Modules sit inside Layout components. ".  This is where you would put your classes.

5. For each of the folders we created, we added a number of files for each folder, base-dir.sass, base,sass, footer.sass, header.sass, layout-dir.sass, buttons.sass, modules-dir.sass, navar.sass.  The *dir.sass files act as directories.  Add an app.sass file at the top level of the project which acts as an index for all the styles added in the base, layouts, and modules folders.  

In the app.sass file we'll import the *dir.sass files - note that no extension is needed in the import statement since sass is smart enough to not need it.

6. The *dir.sass files then import the files in their folders, e.g. base-dir.sass imports base.sass

### Sass Partials: Maintainable Styles Rules

1. To further organize the files, create CSS and SASS folders, moving the appropriate files into those folders.

2. Partials are files in sass that begin with "_" and are then not compiled (e.g. _footer.sass)

3. To watch the entire SASS folder, we need to use
<code>
> sass --watch SASS:CSS
</code>

But this creates a massive mess of *.css and *.css.map files.  So rename all the *.sass files to _*.sass.  SASS is smart enough not to need the "_" in the import statements.

### Sass Variables and Imports: Create a clean scalable stylesheet

1. This section uses the SASSskilz starter project which is annoyingly named - renamed to sassSkills.  Fine.

2. Starting with base defaults -
    body: add a padding and margin of 0 - some browsers add margins and we want to have our page go edge to edge.

3. In layouts, recall that these need to be IDs.  Here you must start with an ID, but inside that ID, you can add a selector (nested) - see #header.  This is just best practices..... the changes here remove the margin that is automatically added on an h1 tag and then added some padding.  Without setting the margin to 0, you would see a larger white border above the title area.

4. Create a partials file, _variables.sass to hold all the variables.  Unlike CSS, SASS only makes 1 import request (which is an HTTP request) when compiling the imports.  CSS, on the other hand, makes an HTTP request for each import in the file.

6. The sections partial contains a grid of ?

7. box-sizing = border-box means that the border and padding is included in the size calculations of the area.   The display=inline-block allows for setting up the grid so that the cols and rows don't stack ontop of each other when the viewport is resized?  

The styled boxes will stack left to right but will expand the entire width of the viewport.

8. Add a navbar partial to modules.  The main-nav partial uses the hierarchy feature of SASS to setup the elements under the navbar in index.html.  Also, the "&" and ":hover" is used to specify the parent so we can place the hover in that hierarchy as well.  In normal CSS, you would need to specify the latter as "a:hover"

### Sass Mixins: Save time and recycle styles

1. This section creates the styled boxes using mixins - see the pro-image partial.  

2. Jason indicates that everything in modules needs to be a class BUT we used an ID for the navbar?

3. We started with a pro-img partial that looked like this:
We started with a class that looked like this:
<code>
.pro-img
    background-color: $brand-primary
    width: 22%
    height: 120px
    display: inline-block
    float: left
    margin: 15px

    -webkit-border-radius: 50px
    -moz-border-radius: 50px
    border-radius: 50px

    -webkit-box-shadow: 0 0 15px #555
    -moz-box-shadow: 0 0 15px #555
    box-shadow: 0 0 15px #555

    border: 1px solid $brand-primary
</code>

4. We then created a mixins partial (at the root of our SASS folder).  We then moved the border portion to the mixins file with the 2 files now looking like this:
<code>
.pro-img
    +border()
    background-color: $brand-primary
    width: 22%
    height: 120px
    display: inline-block
    float: left
    margin: 15px
</code>

And
<code>
=border()
    -webkit-border-radius: 50px
    -moz-border-radius: 50px
    border-radius: 50px

    -webkit-box-shadow: 0 0 15px #555
    -moz-box-shadow: 0 0 15px #555
    box-shadow: 0 0 15px #555

    border: 1px solid $brand-primary
</code>

5. The border mixin was then extended by providing some input parameters, e.g. border($radius, $shadow, $border)
You could also just the radius portion and make a mixin just for that - e.g.
<code>
=border-radius($radius)
    -webkit-border-radius: $radius
    -moz-border-radius: $radius
    border-radius: $radius
</code>

### Sass Extends: Share style properties between other selectors

1. This section extends classes - create a new partial called _extends.sass at the root level of SASS.  Add it to the list of imports in app.sass.  We will create alerts to show how to use class extensions.  To the modules, add a partial called alerts and import it in the modules-dir file.

2. To extend a class, you use @extend + classname, e.g. @extend .alert vv

### Final Project

#### Intro to our Landing Page

This will be a landing page using SASS and SMACSS principles.

#### Setting up our Variables

1. Use the starter from the Downloaded resources.

2. The black and white color variables are there to allow the usage of "darken", etc so that you can alter the color palette - e.g. background-color: darken($brand-main, 10%)

#### Styling our Navbar with Sass

1. This section creates the first section of the website which contains a navbar and a logo area (to the left).

2. The containers partial is added to layouts and the navbar partial is added to modules.

3. Layouts are supposed to contain IDs, but Jason didn't want to add IDs to all the elements - note that SMACSS is merely guidelines, not absolute rules.  

4. The display = block will allow the elements of the container to stack on top of each other as the viewport changes.

5. In the nav-menu-list, set the margin and padding to 0 since we will have padding and margins on the list items, but not the list items container.

6. nav-items - here you can see where display=inline-block really has an affect.  Without it, the menu items are stacked on top of each other on the right - the float = right moves them to the right.

7. The .nav-a class is the anchor class that initially has the items underlined in blue - we remove that by setting the text-decoration to none and the color to $base-dark

8. Initially the changes didn't work (we misspelled nav-items - should be nav-item).  To debug, look at the cascading classes to see what is working - here it worked up until "nav-item" where we had defined display=inline-block.  And there we noticed the misspelled class.

#### Creating the Banner Container

1. This section sets up some base style rules and the banner container - this is the second section on the page.

#### Adding Content to our Banner Container

1. Here we'll setup most of the banner container, except the buttons.  Note that in the index.html, classes that are called "b-*", the "b" stands for "banner".  Also, there's a class called "b-video", which isn't a video, but an image - you "could" put a video here.

2. This section contains a header with some text underneath with a card (with more headings) located to the right portion of the container.

3. A new partial, _banner.sass is added to layout to managed the banner contents.

4. The home-title class is setup so that it aligns with the card?  It wasn't clear what the intent is.

5. For the b-text, we added a bottom margin to make space between the text and the button.  No top margin is needed since the text above it has a bottom margin.

6. The b-card has a drop shadow - the rgba uses black with an opacity of .5.  The b-card also has a padding to give some space around the contents inside of it.  Using the same color as the card's background container makes it looks like the card is jumping off the page.

6. The b-title margin has 0 for the top and sides and then 15 px for the bottom.  The b-video margin has 0 for the top and the auto for the sides and then 15px for the bottom - margin: 0 auto 15px

7. The b-text line height was added (1.7) since the text was a bit squished - I think it's a bit much.  At this point Jason still hasn't notice the error for the font weight in the home title - he's got it as font-size...

#### Doing some quick cleanup in our Sass files

1. Mistake - we set the $base-line-height to 1.25rem - rem is used for font sizes, not line heights.

2. The initial image was resized using HTML - which made it blurry.  A medium version was added to the assets folder - KFSmd.jpg - changed the index.html to use this file.

#### Using the Extend method

1. New partial created, _extend.sass

2. This is just an example of what an extend class looks like - but here you would add classes that you use over and over...

3. Added a class, "center-block"  which is used to center content - we use display=block and margin=auto frequently.  The margin=auto is broken into margin-left and margin-right.

4. To modules, added an images partial, _images.sass.  Add the b-video-img class (and remove the "space" class in index.html).  Add the center-block extend and some padding to push the image away from the header.

#### Styling a section splitter with Sass

1. This is the 3rd section with a row of 3 images - new partial in modules, _img-splitter.sass.  The margin here is 0 from the top, -20px from the left and right, and -40px from the bottom.

2. In the containers partial, the splitter-container has padding of 50px 0 50px, which gives us 50px on the top, 0 on the left and right, and 50px on the bottom.

#### Using advanced Mixins

1.  This section fixes the buttons in the second section.

2. The btn class added to the buttons partial, has border that's both solid and transparent - this makes the button look good when it's clicked??

3.  The transition property allows you to change properties smoothly.

4. The mixins partial includes a btn-variant mixin that declares some variables, that are yet to be used - e.g. $active-background: darken($background, 10%)

5. Using the btn class and the mixins, we can create special button classes.

#### Styling the next Container with Sass

1. This section adds the styles for the About Container area.  The "about" container partial is added to the layout folder.   This partial will contain classes for the title and the paragraph underneath it.

2. The letter spacing for the about-text is used to lightly compact the letters together.

3. Add the about-container to the containers partial (in layout).

4. The about-container has a min-height - supposed to make everything look good....

5. The gear-img is added to the images partial and uses "extend" on the center-block (from the extend partial).

#### Finishing our Landing Page

1. The last section is the footer which has an ID of page-footer.

2. The footer class could have been added to the container partial, but since there's a lot going on with the footer, Jason added a footer partial to layout.

3. The "clear" style indicates which elements can float besides the element itself.  "none" indicates that elements are both sides can float - see W3Schools...

4.  The page-footer position = relative is supposed to keep it from moving around.

5. overflow=hidden ensures that anything that rolls off the page is clipped.

6. The footer links used a display=inline-block to ensure they don't stack on top of each other.  The flex-wrap allows this area to wrap if the viewport shrinks.

7. The footer links could have been nested but they're separate just to show that you don't have to make them nested.  The color=$base-light is redundant, but allow for them to have separate properties in case other items are added to the footer area.
