import React, {Component} from 'react';
import './wishlist.css';

// Components
import ProductCondensed from '../product-condensed/product-condensed'
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';


// Services
import DataService from '../services/data-service';

// Create/access an instance of the notification service
let notifService = new NotificationService();
let dataService = new DataService();


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
        
        this.state = { 
            wishLists: [],
            wishList: null
        };
        
        // Bind Functions - recall that you never want to pass a list
        // down from App.js (according to Mark) - so get the list here
        // instead of in App.js...
        this.loadData = this.loadData.bind(this);
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
 
        // console.log('call to loadData');
        // this.loadData();
    }
    
    loadData = () => {
       
        // Somehow the promise below messes up "this"...
        // so we need to setup "self".
        console.log("loadData");
        let self = this;
        
        this.setState( {wishList: undefined} );
        
        dataService.getWishListItems().then( data => {
            
            // For testing...
            console.log("inside getWishListItems promise: " + data);
            
            self.setState( {wishList: data} );
            
            console.log("after setState: ", self.state.wishList);
                        
        }, err => {
            console.log("Could not retrieve products: " + err);
            
        });
                        
        console.log("End of loadData: ", self.state.wishList);

    }
        
    
    // Create the wish list of products.
    createWishList = () => {
        
        /*
            The wishlists are in an array of wishlist - each
            wishlist has a list of products - this was setup in 
            the prior set of lessons on Node and Mongo.  
            So we'll use the first one in the is the list..
        */
        console.log("createWishList");
 
        if (this.state.wishList != null) {
            const products = this.state.wishList.products.map( (product) => {
                /* For debugging..
                console.log(product);
                */
                console.log("Product: ", product);
                return (
                    <ProductCondensed product={product} key={product._id} />
            )});
            
            return (products);
        }
    }
    
    // React lifecycle functions
    componentWillMount() {
        // Pass in the notification name, observer and callback.
        console.log("componentWillMount");
        notifService.addObserver(NOTIF_WISHLIST_CHANGED, this,
                                 this.onWishListChanged);     
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.loadData();
    }
    
    componentWillUnmount() {
        // Pass in the notification name and observer.
        notifService.removeObserver(NOTIF_WISHLIST_CHANGED, this);   
    }

    // Callback
    onWishListChanged = (newWishList) => {
        console.log("onWishListChanged");
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