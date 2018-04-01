import React, { Component } from 'react';
import './main.css';

// Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

//import Products from '../products/products';
//import WishLists from '../wishlists/wishlists';

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'


// Services
import HTTPService from '../services/http-service';

const http = new HTTPService();

class Main extends Component {
    
    // Called when the component loads.
    constructor(props) {
        super(props);
        
        // Initialize the empty arrays.
        this.state = { 
            products: []
        };
        
        // For initial testing...
        // http.getProducts();
        
        // Need to look this up for more details...
        this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
        
        this.loadData();
    }
    
    loadData = () => {
        
        // Somehow the promise below messes up "this"...
        // so we need to setup "self".
        var self = this;
        
        http.getProducts().then( data => {
            
            // For testing...
            // console.log(data);
            
            self.setState( {products: data} );
            
        }, err => {
            console.log("Could not retrieve products: " + err);
            
        });
        
    }
    
    productList = () => {
        const list = this.state.products.map( (product) => 
            product.imgUrl !== "" &&
            <div className="col-sm-4" key={product._id}>
                <Product product={product}/>
            </div>
        );
        
        return (list);
    }
            
    render() {
        return (
            
            <div className="Main">
               
                <div className="container Main-main">

                    <div className="row">
                        <div className="col-sm-8">
                            
                            <div className="row">
                                { this.productList() }
                            </div>
                            
                        </div>
                        <div className="col-sm-4">
                            < WishList /> 
                        </div>
                    </div> 
                </div>

            </div>
            
        );
    }
}

export default Main;
