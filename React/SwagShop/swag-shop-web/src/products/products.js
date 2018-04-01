import React, {Component} from 'react';
import './products.css';

// Components
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';


// Services
import DataService from '../services/data-service';

// Create/access an instance of the notification service
let notifService = new NotificationService();
let dataService = new DataService();


class Products extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
        
            <div className="products">
                <h1>Here's where we manage products!</h1>
            </div>
        )
    }

}

export default Products;