import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

// Services
import HTTPService from '../services/http-service';

const http = new HTTPService();

class App extends Component {
    
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to the Swag Shop</h1>
                </header>
                <div className="container App-main">
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

export default App;