/* 
  Singleton class for the data service
 */
// To help with copying data
import update from 'immutability-helper';

// Components
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

// Services
import HTTPService from '../services/http-service';

// Create an instance of the notification service
// Since it's a singleton, only one instance will be
// created.
let notifService = new NotificationService();

const http = new HTTPService();

// Singleton class instance
let instance = null;

class DataService {
    
    constructor() {
        if (!instance) {
            instance = this;
            
//            this.state = {
//                wishLists: [],
//                wishList: null
//            };
        }
        
        this.wishLists = [];
        this.wishList = null;
        
        return instance;
    }
    
    // Is there a wishlist?
    haveWishList = () => {
        return this.wishList == null;
    }
    
    
    // Checks if the item is the wishlist - for changing the
    // state of the button - in the tutorial, wishList was an array.
    // When getting the data from the database, the wishList is an object,
    // where products is the array...
    itemOnWishList = (item) => {
        
        // console.log("getWishListItems");
        
        if (this.wishList == null) {
            // console.log("wishlist is null");
            return false;
        }

        for (var index = 0; index < this.wishList.products.length; index ++) {
            if (this.wishList.products[index]._id === item._id) {
                
                // console.log("item found!");
                return true;
            }
        }

        // console.log("item not found!");
        return false;
    }
    
    getWishListItems = () => {
    
        // Somehow the promise below messes up "this"...
        // so we need to setup "self".
        console.log("getWishListItems");
        
        var self = instance;

        var listPromise = new Promise( (resolve, reject) => {
            // Exercise: retrieve the wishlist from the database.
            // Note that the database has lists of wishlists...
            http.getWishListProducts().then( wishLists => {

                // For testing...
                console.log("All wishlists: " + wishLists);

                // For testing...
                console.log("Single wishlist[0]: ", wishLists[0]);              
                resolve(wishLists[0]);
                
                // self.state.wishList = Array.from(wishLists[0]);
                
                // Copy the data to make it available using
                // the immutability-helper.
                self.wishList = update(self.wishList, {$set: wishLists[0]} );
                
                console.log("SELF.wishList: " + self.wishList);

                // This is critical to set the initial state of the buttons.
                notifService.postNotification(NOTIF_WISHLIST_CHANGED,
                                              this.wishList)
            }, err => {
                console.log("Could not retrieve wishlist items: " + err); 
            });
        
        });
        
        return listPromise;
            
    }

    // The data service needs to know the current wishlist.
    // Initialization of the wishlist - if there's no current wishlist,
    // there should be a mechanism to create a list first...
    addWishListItem = (item) => {
        
        var self = instance;
        
        // This should be part of the logic below - in the future,
        // it's not a good idea to create unnecessary promise objects..
        // And since this singleton should never retain "state", it's never
        // going to have a wishlist....
        if (self.wishList == null) {
            
            // Not sure what to do here yet...
            console.log("There's no current wishlist!")
            
            var rejectPromise = new Promise((resolve, reject) => {
                return reject({msg: "There's no current wishlist!"});
            });
            
            return rejectPromise;
 
        }
        
        var addPromise = new Promise( (resolve, reject) => {
            
            http.addWishListProduct(self.wishList, item).then( product => {
                
                console.log("Add wishlist product: " + product);
                
                resolve(product);
            
            }, err => {
                console.log("Could not add product to wishlist: " + err); 
            });
        
        });
        

        // Since wishList is an object with products (as opposed to 
        // the array used in class). we need to push the item onto
        // the products arrray...

        // self.wishList.push(item);
        // Instead ->
        this.wishList = update(this.wishList, {products: { $push: [item] }});
        
        
        // Pass in the notification name and the wishlist as data.
        notifService.postNotification(NOTIF_WISHLIST_CHANGED,
                                      this.wishList)

        return addPromise;
    };
    

    // Remove an item from the current wishlist.  Here again we change
    // the wishList array to an object with the items in the product 
    // array.
    removeWishListItem = (item) => {

        var self = instance;
        
        // This should be part of the logic below - in the future,
        // it's not a good idea to create unnecessary promise objects..
        // And since this singleton should never retain "state", it's never
        // going to have a wishlist....
        if (self.wishList == null) {
                       
            var rejectPromise = new Promise((resolve, reject) => {
                return reject({msg: "There's no current wishlist!"});
            });
            
            return rejectPromise;
 
        }

        var removePromise = new Promise( (resolve, reject) => {
            
            http.removeWishListProduct(self.wishList, item).then( product => {
                
                console.log("Remove wishlist product: " + product);
                
                resolve(product);
            
            }, err => {
                console.log("Could not remove product to wishlist: " + err); 
            });
        
        });

        for (var index = 0; index < this.wishList.products.length; index ++) {
            
            if (this.wishList.products[index]._id === item._id) {
                
                // Using default splice...
                // this.wishList.products.splice(index, 1);
                
                // Using the immutability-helper
                this.wishList.products = update(this.wishList.products, {$splice: [[index, 1]]} );
                
                // Pass in the notification name and the wishlist as data.
                notifService.postNotification(NOTIF_WISHLIST_CHANGED,
                                      this.wishList)

                break;
            }
        }
        
        return removePromise;
    };
}

export default DataService;