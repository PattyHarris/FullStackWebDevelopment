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

### Final Project: Intro to our Landing Page

###  Final Project: Setting up our Variables

###  Final Project: Styling our Navbar with Sass

###  Final Project: Creating the Banner Container

###  Final Project: Adding Content to our Banner Container

###  Final Project: Doing some quick cleanup in our Sass files

###  Final Project: Using the Extend method

###  Final Project: Syling a section splitter with Sass

###  Final Project: Using advanced Mixins

###  Final Project: Styling the next Container with Sass

###  Final Project: Finishing our Landing Page

###  Final Project:

###  Final Project:

###

###

###

###
