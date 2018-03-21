# UltimateWeb Tutorial

## Intro to React

This continues the Swag Shop from the last set of lectures - I copied the Swag Shop folder to the React folder to separate out the changes.  When I did that, I removed the prior modules folder and ran:
<code>
> npm init
> npm install --save body-parser
> npm install --save express
> npm install --save mongoose
</code>

I also had to run - although the -g here should have made this global....
<code>
> npm install -g nodemon
</code>

### Setting up React Tooling

1. Start by bring up the React documentation:
https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react

The page Mark shows is no longer available...

2. We'll be creating a new app - I started in the React/SwagShop level folder.  Then from the terminal - can't use caps for the application name...
<code>
> npm install -g create-react-app
> create-react-app swag-shop-web
</code>

The latter tells you to start up the web app using yarn, but npm works too.
<code>
> cd swag-shop-web
> yarn start
</code>

3. In package.json, you can see the scripts that are run when performing various tasks, such as "start" or "build".

Mark has a "devDependencies" section - mine is under "dependencies"....

<code>
"devDependencies": {
    "react-scripts": "0.9.5"
},
</code>

4. The web page you see is in App.js - you can change "Welcome to React" to "Welcome to Swag Shop".

5. The App.js is "jsx" code which isn't handled by Bracket without some packages - so install from the package manager, JSXHint and React.JS (jsx) Language (by automenta).

6. Then, at the bottom of Brackets, change the file type from JavaScript to JSX - now the colors are correct.

7. The starting point for the app is actually in index.js - in React you write HTML in the JS files...

In App.js, "export default App" exports "App" as an HTML tag - see index.js where "render" is called using this tag.  The "root" element in the "render" line is defined in public/index.html

8. Using ES6, these 2 lines are equivalent - first line is old JS, second line is ES6:
<code>
var react = require('react');
import React from 'react';
</code>

9.  Note that with React, use "className" whereas regular HTML uses "class".  You can also import .svg files and then use them directly in the HTML code - see "{logo}" in App.js

### Installing Bootstrap

1. Create 2 folders in the "public" folder - css and js.  Download Boostrap and copy the "min js" file to js and likewise the "min css" to the css folder.

2. We also need jQuery and "tether".  For jQuery, download the compressed production version from the jQuery web site - we used the CDN version when learning this initially - but that increases load time.  The download for jQuery ONLY works on Chrome.  Download the tether zip from tether.io - copy the "min css" and "min js" files to the public/css and public/js folders.  May not need the "min css" file.

3. To the public/index.html file, add the "link" and "script" for the above CSS and JS files.

4. Run the web page in Chrome so you can use the console to check for errors (http://localhost:3000).  To help with debugging, add the React Developer Tools extension to Chrome (Facebook extension).  After refreshing the web page, the React components are now visible when looking at Elements in the console.

5. To make sure bootstrap is installed, change the outter "div" in App.js to use the "container" class - the web page should now have a border on each side.  This is just a test.....
<code>
    <div className="container App">
    </div>
</code>

### Setting up the API

1. I copied the API from the last set of tutorials and added the "app.all" and port 3004 changes from the downloaded files.  Tested on postman - seems to work.

2. There's a data.json file in the downloaded files that has 3 products to insert into the database - open the database in the mongo shell:
<code>
> show dbs
> use swag-shop
> --> copy the content of the data.json here
</code>

The 3 inserts sort of mess up what I had already, so I had to do a bit of cleanup... I added DELETE handlers where needed to clean up the prior instances of the products added with the data.json entries.

3. By the end of this section, you should have the database, server, and web site running.

### Creating a HTTP Service

1. For an example of the simple website this is targeting, see www.harrys.com.

2. First step, re-organize the src folder - currently, all the src files are in this one src folder.  The "App" + logo files are moved to the "app" folder.  A "services" folder is created - I moved the "registerServiceWorker" to that folder.  We added a http-service.js file there too.  The latter will be used to communicate with the API.

3. For fetching data from the server, from the terminal install whatwg-fetch (in swag-shop-web) - see online for more details, but this has something to do with "Promise" system.
<code>
> npm install --save whatwg-fetch
</code>

The install indicates that one needs to commit package-lock.json file: "npm notice created a lockfile as package-lock.json. You should commit this file."

4. HTTPService class - using ES6, in the http-service.js class, import the whatwg-fetch.  Create the class for HTTPService.

5. The function getProducts is in ES6 format - the equivalent functions:
<code>
    /** The above is the same as - if there are
        parameters, they would be in in the ()
        above...
        e.g.
    */

    getProducts = (param1, param2) => {

    }

    var getProducts = function(param1, param2) {
    }
</code>

6. The call to fetch takes a URL - fetch is from the whatwg-fetch middleware...

Output the response.json - this logging will be output when we add the call to the service in the App.js constructor - see below.

7. At the end of the class, export the class - instead of "module.exports = ", we can just use "export default HttpService".

8. Add a contructor to the App class - the constructor is called when the component loads.

Something got messed up at this point - maybe the install of whatwg-fetch.  Had to remove the node_modules folder and run npm install.  Since everything is installed with "--save", the package.json will be used to update everything...

### Promises with ES6 and React

1.  Refactored getProducts to use a Promise - that is, instead of calling fetch() directly, fetch is called as part of the promise - see the code for the order of calls - asynchronous - so promise is returned probably before the fetch is complete.

2. To handle the promise, create the loadData function in App.js - basically calls getProducts and handles the "then" with 2 additional functions, "data" and "err".  Note that in ES6, if the function has no parameters, then () isn't needed, e.g.
<code>
    loadData = () => {
        http.getProducts().then(data => {
        }, err => {
        });
    }
</code>

Note that for the "err" case to be called, we'd call reject() from the http-service getProudcts().

3. The loadData also has to use "bind" to bind the function - Google React bind for more details.

### Components in React - Website Product

1. Added a product folder with a product.js and product.css file.  This to separate out the components for the website.

2. The import from React indicates that we're only importing the Component part of the React library?

3. Component allows for the render() function which is used to put anything on the screen.

4. Note that product.js is using the bootstrap card.  Also, in JSX, there's always ending tags - e.g. <img></img>.

5. Import Product in App.js.  There's some warnings, but they're fine.  To test, in App.js, remove the "p" tag with className = App-intro, add a new class App-main (and add this to App.css).  Then, to test:
<code>
<div className="App-main">
    <Product />
</div>
</code>

### Props in React

1. Two important aspects of React are props and state.  props are attributes that are read only and do not change.  state are things that change.

2. To work with props, you pass in the attributes as you would HTML, for example (NOTE: this will change later on when we pass in the whole product):
<code>
    <Product title="Cool Toy Gun" price="4.32" imgUrl="some url" />
</code>

Then, in product.js, you access the props (NOTE: this will change later on below when a product is passed into the component instead of individual parts).
<code>
<img className="card-img-top" src={this.props.imgUrl} alt="Product"/>
</code>

Recall the {} allows you to insert JS in the HTML...

3. At this point the UI is a bit of a mess.  First add a productCard class to product.css (Mark called this class "product").

4. Mark is adding padding at the "container" level...so add padding the App-main.  Also, we hadn't yet added the bootstrap container so that is added to the div that has the App-main class.

5. Add the bootstrap row and cols to the div's as well (App.js).
At this point there needs to be some padding between the columns - handle that later.

### Working with a State in React

1. First, initialize state with an empty products array.

2. Next, replace the hardcoded Product tag code in the row div with data from the server.  See the function productList in App.js.  This uses the JS "map" function to create product attributes for each item in the array.
<code>
    const list = this.state.products.map( (product) => {

    })
</code>

3. Whenever you use lists in React, you have to give each item a unique ID - so here we'll use the _id from the database.  The outter most item for that list has to have the ID.

4. Note that the return (list) - the () are required by React.  Then we replace the hardcoded data here:

<code>
<Product className="col-sm-4" price="4.23" title="Best Coffee" imgUrl="https://www.littlecoffeeplace.com/wp-content/uploads/2017/04/Eating-Coffee-Beans.jpg"/>
</code>

with - note this assumes the database has only 3 items...

<code>
{this.productList()}
</code>

The last thing that makes this all work is to bind the function as we had to do with loadData and then set the state.

5. In loadData, we call setState - there's some issue with "this" and "promises", so we needed to setup a variable "self" to hold "this" ????

The "this" inside the Promise is referring to the Promise "this" and not the component "this".

6. Everytime setState is called, React reloads the component - important to note.  Here, the App component and every component underneath it is reloaded.

7. There was a warning about the productList function not returning = we had to remove the {} below....
<code>
    const list = this.state.products.map( (product) => {

    });
</code>

Then the data is displayed.

I added some checks for empty images to eliminate the other data I had in my DB.  Took some Googling and I had to update the database so the attribute existed:
<code>
> db.products.update( {"_id": ObjectId("5a80a2e2985b2f1210fabe8b")}, {$set: {"imgUrl": ""}})    
</code>

Also went back in and add __v = 0 to the imported data from Mark.

### Creating a WishList Component

1. Create the src/wishlist folder with new files wishlist.js and wishlist.css.

2. Copy eveything from product.js to wishlist.js (as a starting point).

3. This wishlist will NOT download using an external API - do it's an internal piece of data.  

4. The product items are created using a product-line-item component -> product-condensed.  This also has it's own folder and .js, .css files.

5. Recall that "props" are passed down from the component parent - so for the line items (product-condensed), the props are passed in by the WishList component.

6. Import wishlist in App.js - changed "container" to "container-fluid" so that the page takes up all the space on the page.

7. To allow space for the wishlist, the productList is put in a col-sm-8 - the wishlist will go in a col-sm-4...

Initially, the latter div just has:
<code>
<div className="col-sm-4">
    < WishList />
</div>
</code>

8. The product images are waay to big now - see the changes in product.css.  Also, as I suspected, we needed another row div when we added the col-8 and col-4

Also, it is acknowledged that there's a number of size issues with the UI that can be fixed if you want.

9. To test the wishlist, first add some hard-coded values.  Import the product-condensed component.

10. When setting the wishlist component, it's important to note that you never want to pass the list down from App.js - you want to keep things modularized and NOT linked.  Components need to be self-contained.

11. For test data, to the wishlist component constructor - repeated 3 times ...
<code>
    this.state = {wishList:[
        {
            title: "Bologna Killer",
            price: 23.99,
            _id: "sdfsdfjl"
        },
    ]}
</code>

12. Add some margin to the X buttons - see the pc-condensed class in the product-condensed.css file.

### Exercise: React Components

Build a React Website using the components we've used so far - basically, the exercise is to create a website that uses React and Bootstrap, with columns and is responsive.

Rounded corners - after playing around with everything, to get the video card to have rounded corners, set the background color of the card to dark grey, and then override the top card-body.  Otherwise, the rounded corners don't work.  Weird.

### Building a Singleton Data Service

1. "Flux is the application architecture that Facebook uses for building client-side web applications.  It complements React's composable view components by utilizing a unidirectional data flow."

"Flux is a pattern and Redux is a library. ... Both Flux and Redux have actions. Actions can be compared to events (or what trigger events). In Flux, an action is a simple JavaScript object, and that's the default case in Redux too, but when using Redux middleware, actions can also be functions and promises".

2. Instead of using Redux or Flux, we'll be using a singleton pattern data service and a observer pattern notification service.

3. The observer pattern will be used here by the wishlist and product components to know when to add a wishlist item or when the wishlist item is removed - in the latter case, change the product button.

4. For the data service, create a new file data-service.js in the services folder.  Create the singleton class and import that component in wishlist.js.

### Creating a Ntification Service - Observer Pattern

1. The notification service contains a list of observers that receive notifications.

2. We'll use a map to store the observers - the data service could be improved by using a map as well.  

3. The observers register their "this" plus the function that gets called when they are notified.  For example, the observers, a list of objects, might have the following data:
<code>
var observers = {
    "wishListChanged": 
        [{observer: component1, callback:function1}, {observer: component2, callback:function2}],
    "userHasLoggedIn":[{observer: component1, callback:function3}, {observer: component2, callback:function3}]
};
</code>

4. To test, import in the wishlist component.

### Posting Notifications to React Components

1. Create a global at the top of notification-service that can be accessed by any component that wants to post a notification: NOTIF_WISHLIST_CHANGED

2. Import the global from notification service in the data-service:
<code>
import NotificationService, 
    {NOTIF_WISHLIST_CHANGED} from './services/notification-service';

</code>

3. Then, at the top of the data-service, create an instance of the notification service.  Since it's a singleton, the instance will only be created once.

Use this instance to post a notification whenever a wishlist item is removed or added.

4. Add a postNotification handler in the NotificationService that basically runs through all the observers registered for the given name and calls their callback, passing in the "data" that was sent.

5. In the data service, to post a notification:
<code>
// Pass in the notification name and the wishlist as data.
notifService.postNotification(NOTIF_WISHLIST_CHANGED, wishlist)
</code>

### Observing Notifications in React

1. In the wishlist componet, get rid of the fake data:

2. In the Products componet, using React and ES6, we're creating an empty function that calls onButtonCicked().  Note that you need the attribute to be onClick NOT onclick (ES6).
<code>
<a href="#" onClick={ () => this.onButtonClicked() } className="btn btn-primary">Add to Wishlist</a>
</code>

3. Also in the Product component, add a constructor.  Add the onButtonClicked function and bind it in the constructor.

4. Import the data service and setup the instance.  

5. In onButtonClicked, pass in the whole product.  That means we need to change some things since the product componet was assuming the individual parts of the component - e.g. instead of this.propsimgUrl, we need to change things to this.props.product.imgUrl. In App.js we nned to change how the products are displayed:

<code>
<Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>

{/* Change to */} 
<Product product={product} />
</code>

6. In the wishlist component, we need to add and remove observers.  Here we use the React lifecycle functions componentWillMount and componentWillUnmount.

7. Add an observer to the notification service when the component is mounted.  When the component is unmounted, we'll remove it.  

8. When the component is mounted, the callback is onWishListChanged.  Remember to bind the function.  To update the state of the wishlist, use "setState".  Recall that this reloads the component....

### Finishing Our Full Stack React App

1. React allow for conditional CSS styling.  When the "add" button is clicked, change it to red and change the tex.

2. In the Product component, set the state in the constructor by calling the (new) dataService function, itemOnWishList().

3. In the dataService component, add the itemOnWishList() function to check if the given item is on the wishlist.

4. In the product component "render" function, add a btnClass variable that changes the color of the button depending on it's state.  Change the className for the "Add to Wishlist" button to this variable (btnClass).  Text can be changed similarly.

5. Change the onButtonClicked function to check the state of the wishlist and remove the item when the item is in the wishlist.

6. At this point, things didn't work until the notification component related functions were added to the product component - basically, the state wasn't getting refresh since we didn't add the product component to the notification service.  As in the wishlist, the load and unload functions were added as well as code to update the state of the onWishList bool.

7. To handle the X button click, similar changes are needed as above in the productCondensed component.  See the function removeProduct.

Here, since the wishlist will refresh, there's no need to worry about setState.

### Exercise: Extending the Swag Shop

1. First, get the old swag shop working from the prior set of lectures on Node, Mongo.  I added the following route to the productRoutes since I stumbled when I tried in postMan using GET with http://localhost:3006 when it was suppsed to be http://localhost:3006/products

2. PostMan now has workspaces, so added a new SwagShop workspace to save all the endpoint testing.

3. The current product.js in model does not have an imgUrl attribute - so if you save a product, it's not going to save the img - just a note.  The imgUrl was added in this last set of tutorials when the data was imported - see data.json at the beginning of this file.

4. To add and remove items to the wishlist, the dataService will need to interact with the database.  The add and remove functions in the dataService are used both by the product and productCondensed components.

5. To return the items on the wishlist - I'm only going to deal with a single wishlist, but allow the addition and removal of a wishlist - see below.  In httpService, added a getWishListProducts.

6. In App.js, add a wishlist array to the constructor as well as bind to a wishList.  Then in loadData, call the abov httpService to retrieve the wishlist from the database.

7. I had 2 wishlists which made coding harder but better - both wishlists had the same item so I removed one occurrence using the shell:
<code>
> db.wishlists.update( {"_id": ObjectId("5a7ce3e115fe29068baa99ce")}, {$pull :{products :  ObjectId("5a809d8624fe08117d32baae")}})
</code>

8. The wishlists are nested arrays - array of wishlists which have an array of products.  This made the output tricky.

Code to iterate them - the outter array is not in the code since the array of prouducts is pulled out in the data retrieval.
<code>
       const list = this.state.wishLists.map( (wishList, index) => {     
        if (this.state.wishList != null) {
            const products = this.state.wishList.products.map( (product) => {
                /* For debugging..
                console.log(product);
                */
                return (
                    <ProductCondensed product={product} key={product._id} />
            )});
            
            return products;
        }
        });
        
        return list[0];

</code>

9. Finally got the wishlist to work - the dataService call wraps the httpService call in a Promise - which resolves AFTER the data is ready.  This causes a problem for the wishlist UI.  The solution is to wrap the dataService call in the wishlist.js with a Promise - then when the data is ready, setState will cause the new data to be rendered.

10. Saving data in dataService - it's cumbersome in JS to save objects - you can't just assign as in other languages.  I found React has an immutability-helper, which I installed:
<code>
> npm install immutability-helper --save
</code>

11. Access-Control-Allow-Methods in preflight response error - CORs error.  Fixed by adding PUT and DELETE to the access control headers in server.js on the server code.  There was already access control header stuff for POST and GET, but not the latter.  Sheesh!

12. The render wasn't getting called automatically when the the wishlist was updated - the original check used a static array wishList from the tutorial, whereas here the wishList is an object with a products array.

13. The initial render where there's an item on the wishList (from the database) failed to render until I add a postNotification after the wishList is successfully setup from the database.

14. Bootstrap 4 is not compatible with React - DOM vs virtual DOM.  I should be using ReactStrap, but it would be lots of changes, which isn't useful at the moment.  I found this which might be enough to finish things up: https://m.pardel.net/react-and-bootstrap-4-part-1-setup-navigation-d4767e2ed9f0

To use this sample, I need to use Bootstrap 4 (I was using the Alpha).

15. Start by cleaning up - removing the React image and it's reference.

16. Add the navigation bar - basically, we add the navigation bar as a component.  Pretty cool.

17. The entries in the NavBar are abstracted into a component.  These next components are "functional components" -  see this:
https://reactjs.org/tutorial/tutorial.html#functional-components

18. Setting up the links is a bit confusing, but see the tutorial to see if it makes sense.  If the "link" is the current link, the word "(current)" is shown - that's the "extra" content...

19. Added a disabled check for the NavItem as well as another className...


20. Replace the Home, Link, and Disabled li tag items with the NavItem class - for example, here's the old and NavItem version of the Home li element - in the tutorial, the href's for the link and disabled li tags were modified to use "page1" and "page2" instead of just a "/" - which are hacks since if all the paths are "/", the nav-link disabled doesn't have any effect.
<code>

<li className="nav-item active">
    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
</li>

<!-- Becomes -->

<NavItem path="/" name="Home" />
    
</code>

21. Lasty, add the dropdown component class.  This is a component and not a functional component since it has state. The NavItem could be a component, since it's state would be "current" or "not current".

22. 
