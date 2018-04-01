import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './App.css';

// Components

import Products from '../products/products';
import WishLists from '../wishlists/wishlists';
import Navigation from '../navigation/navigation';
import Main from '../main/main';

// Services
import HTTPService from '../services/http-service';

const http = new HTTPService();

class App extends Component {
                
    render() {
        return (
            
            <div className="App">
                <div><Navigation /></div>
                
                <header className="App-header sectionLight">
                    <h1 className="App-title">Welcome to the Swag Shop</h1>
                </header>          
               
                {/* Prior code moved to Main....
                <div><Main /></div>

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
                */}

                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/wishlists" component={WishLists} />
                    <Route path="/products" component={Products} />
                </Switch>
            </div>
        );
    }
}

export default App;
