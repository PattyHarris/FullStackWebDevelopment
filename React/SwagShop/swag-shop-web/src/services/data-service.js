/* 
  Singleton class for the data service
 */

// Components
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

// Create an instance of the notification service
// Since it's a singleton, only one instance will be
// created.
let notifService = new NotificationService();

// Singleton class instance
let instance = null;
var wishList = [];

class DataService {
    
    constructor() {
        if (!instance) {
            instance = this;
        }
        
        return instance;
    }
    
    // Checks if the item is the wishlist - for changing the
    // state of the button.
    itemOnWishList = (item) => {
        for (var index = 0; index < wishList.length; index ++) {
            if (wishList[index]._id === item._id) {
                return true;
            }
        }

        return false;
    }
    
    addWishListItem = (item) => {
        wishList.push(item);
        
        // Pass in the notification name and the wishlist as data.
        notifService.postNotification(NOTIF_WISHLIST_CHANGED,
                                      wishList)

    };
    
    removeWishListItem = (item) => {
        for (var index = 0; index < wishList.length; index ++) {
            if (wishList[index]._id === item._id) {
                
                wishList.splice(index, 1);
                
                // Pass in the notification name and the wishlist as data.
                notifService.postNotification(NOTIF_WISHLIST_CHANGED,
                                      wishList)

                break;
            }
        }
    };
}

export default DataService;