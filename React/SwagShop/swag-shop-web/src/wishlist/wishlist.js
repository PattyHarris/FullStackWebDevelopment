import React, {Component} from 'react';
import './wishlist.css';

// Components
import ProductCondensed from '../product-condensed/product-condensed'
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

// Services
import HTTPService from '../services/http-service';

// Create/access an instance of the notification service
let notifService = new NotificationService();
const http = new HTTPService();

class WishList extends Component {
    
    constructor(props) {
        super(props);
        
        // Initialize the wishlist array.  Use the following for fake
        // data:
        /*
        this.state = {wishList: [
            {
                title: "Bologna Killer",
                price: 23.99,
                _id: "sdfsdfjl"
            }
        
        ]};*/
        
        this.state = { wishList: [] };
        
        // Bind Functions
        this.loadData = this.loadData.bind(this);
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    
    loadData = () => {
        
        // Somehow the promise below messes up "this"...
        // so we need to setup "self".
        var self = this;

        // Exercise: retrieve the wishlist from the database.
        http.getWishListProducts().then( data => {
            
            // For testing...
            // console.log(data);
            
            self.setState( {wishList: data});
            
        }, err => {
            console.log("Could not retrieve wishlist items: " + err);
        });

    }
    
    // React lifecycle functions
    componentWillMount() {
        // Pass in the notification name, observer and callback.
        notifService.addObserver(NOTIF_WISHLIST_CHANGED, this,
                                 this.onWishListChanged);     
    }
    
    componentWillUnmount() {
        // Pass in the notification name and observer.
        notifService.removeObserver(NOTIF_WISHLIST_CHANGED, this);   
    }
    
    // Lifecycle End
    
    
    // Create the wish list of products.
    createWishList = () => {
        
        const list = this.state.wishList.map( (product) =>
            <ProductCondensed product={product} key={product._id} />
        );
        
        return list;
    }
    
    // Callback
    onWishListChanged = (newWishList) => {
        this.setState( {wishList: newWishList} );
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        { this.createWishList() }
                    </ul>
                
                </div>
            
            
            </div>
            
        );
    }
}

export default WishList;