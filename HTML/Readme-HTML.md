# UltimateWeb Tutorial

## HTML

1. Index.html - every project needs one to indicate the starting point (by the browser).
2. <!DOCTYPE html> indicates we're using HTML 5.  If you're using another version, you'd specify it here.
3. The "head" portion of the html contains the CSS and included files.  It can also contain a title, but that title will appear not on the page, but on the page title - e.g. on the tab.
4. To move the cursor to the end of a tag with CMD+<right arrow>
5. With HTML 5, you no longer need </br>, you can just use <br>.  
6. <hr> is a horizontal line...
7. Bracket "should" show HTML errors in red, but...
8. You should never have "floating" text, so put text in <p></p>
9. <em></em> and <i></i> - em is strongly emphasized - more strongly than italized.

## HTML Headers and Body

1. At this point, create a new folder FirstWebSite which we'll use for this section.
Bracket is a bit wierd this way - you need to creat the folder first, and then by opening this folder, sets this as the default path for future files.  Odd..
2. Create the index.html file.
3. This section seems to be a repeat of the last one, with a few more bits.
4. To open the Chrome developer console, use CMD+alt+j or right-click and use the Inspect menu option.  This cancels "live preview" so you may need to reload the page...
5. The concept here is to develop a page/web site similar to the Devslopes learn to code web site.  Start off with a title...

## HTML Lists, Paragraphs and Text Styling

(Note, Contine from the prior video starts over again from the same video...)

1. Add a list with some clickable items.
Links don't go anywhere, yet.
2. Add a horizontal rule, e.g. hr

## HTML Displaying Data with Tables

1. The main point here with tables is that most of the things done in the past with tables is now done with CSS.  
2. To show the capabilities, various attributes were added - see the page for details.  Border is 0 which still keeps the alignment, but takes off the "ugly" border - to see the difference, you can set the border to "5".

### Challenge 

Make the original list of href's a horizontal list in a table.  Originally, the list was:
<code>
        <ul>
        <li><a href = "#">Home</a></li>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Courses</a></li>
    </ul>
</code>

## HTML Images and Forms

1. Add a ordered list followed by a video - you need to find the "embed" menu which is different that what is shown in the tutorial.  The embed frame is put after the ordered list - we changed the frameborder to 1...

    <code>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VeXcTkbYTVk" frameborder="0" allowfullscreen></iframe>
    </code>

2. We change the original size from 560X315 to 400X225 - Marc guessed at the aspect ratio - I found a caculator to determine the proper height.

3. Added a form for name and email as well as a submit button.  Note that the button tag is the same as 
    <code>
        <input type="submit" value="SUBMIT">
    </code>

4. To pick the source for the image, Google for Devslopes, then from images, select View Image, copy the image path from the browser search bar.
(e.g. https://pbs.twimg.com/profile_images/766756838624952328/udUHy4ze.jpg)

5. To make the image on the same line as the header, added another table.

### Challenge

The basic challenge is to make use of what we learned in the HTML related courses.  OK fine.

1. To show a local image, you can "Open With" a browser and then copy the link.
2. To show the mySwims video, you need to go the Video Manager to see them, and then right-click to get the Embed Code link.
3. There's supposed to be 12 images, I think 4 is enough...











