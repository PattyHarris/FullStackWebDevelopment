import React, {Component} from 'react';
import './product-condensed.css';

// Components
import DataService from '../services/data-service';

// Access the instance
let dataService = new DataService();

class ProductCondensed extends Component {
    
    constructor(props) {
        super(props);
        
        // Bind functions
        this.removeProduct = this.removeProduct.bind(this);
    }
    
    removeProduct = () => {
        dataService.removeWishListItem(this.props.product);
    }
    
    render() {
        return (
            <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;