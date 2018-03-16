/* 
  Singleton class for the notification service.
 */

// Global
export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";

// List of observer objects
var observers = [];

// Singleton class
let instance = null;

class NotificationService {
    
    constructor() {
        if (!instance) {
            instance = this;
        }
        
        return instance;
    }
    
    /*
        Data has changed - notify the observers.
    */
    postNotification = (notificationName, data) => {
        console.log("postNotification");
        let observerList = observers[notificationName];
        
        for (var index = 0; index < observerList.length; index ++) {
            var observer = observerList[index];
            observer.callback(data);
        }
    }
    
    /* 
        Input: 
            notificatonName: what notification you're registering for
            observer: component
            callback: what function will be called
    */
    addObserver = (notificationName, observer, callback) => {
        
        let observerList = observers[notificationName];
        if (!observerList) {
            
            // Create an empty array for this notification name.
            observers[notificationName] = [];
        }
        
        let obsObj = {observer: observer, callback: callback};
        observers[notificationName].push(obsObj);
    }
    
    /* 
        Removes an observer from the notification type.
    */
    removeObserver = (notificationName, observer) => {
        let observerList = observers[notificationName];
        
        if (observerList) {
            
            for (var index = 0; index < observerList.length; index ++ ) {
                
                if (observerList[index].observer === observer) {
                    observerList.splice(index, 1);
                    
                    // Reset the list for this notification name.
                    observers[notificationName] = observerList;
                    break;
                }
            }
        }
    }
    
 }

export default NotificationService;