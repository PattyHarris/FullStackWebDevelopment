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

### Sass Variables and Imports: Create a clean scalable stylesheet

### Sass Mixins: Save time and recycle styles

### Sass Extends: Share style properties between other selectors

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
