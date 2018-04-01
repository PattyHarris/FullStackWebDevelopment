import React, {Component} from 'react';
import NumberFormat from 'react-number-format';

import './product.css';

// Components
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

// Access the instance
let dataService = new DataService();
let notifService = new NotificationService();

class Product extends Component {

    constructor(props) {
        super(props);
        
        // onWishList is a boolean...seems like we should pass
        // in the product here?
        this.state = { 
            onWishList: dataService.itemOnWishList() 
        };
        
        // Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
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

    onButtonClicked = () => {
        
        // Modified to use a promise for both addition and removal -
        // needed when working with the database instead of the local
        // wishList array - see the code in dataService.
        if (dataService.haveWishList === false) {
            
        }
        if (this.state.onWishList) {
            dataService.removeWishListItem(this.props.product).then(response => {
                
                console.log(response);
                
            }).catch(e => {
                console.log(e);
            });
        } 
        else {
            dataService.addWishListItem(this.props.product).then(response => {
                
                console.log(response);
                
            }).catch(e => {
                console.log(e);
            });
        }
    }
    
    // Callback
    onWishListChanged = (newWishList) => {
        this.setState( {
            onWishList: dataService.itemOnWishList(this.props.product)
        });
    }
    
    
    render() {
        
        var btnClass;

        if (this.state.onWishList ) {
            btnClass = "btn btn-danger btnCenter";
        }
        else {
            btnClass = "btn btn-primary btnCenter";
        }

        return (
            
            <div className="card  productCard">

                <img className="card-img-top" src={this.props.product.imgUrl} alt="Product"></img>

                <div className="card-block">
                    <h4 className="card-title">{this.props.product.title}</h4>
                    
                    <p className="card-text">
                        Price: <NumberFormat value={this.props.product.price} displayType={'text'} decimalScale={2} fixedDecimalScale={true} thousandSeparator={true} prefix={'$'} />
                    </p>
                                        
                    <a href="/" onClick={ () => this.onButtonClicked() } className={ btnClass }>{this.state.onWishList ? "Remove from Cart" : "Add to Cart"}</a>
                </div>

            </div>
        );
    }
}

export default Product;
