// Apparently not needed since it's a polyfill...
// import 'whatwg-fetch';

class HTTPService {
    
    constructor() {
        this.later = this.later.bind(this);
        this.responseStatus = this.responseStatus.bind(this);
        this.json = this.json.bind(this);
    }
    
    later = (delay, value) => {
       new Promise( (resolve) => { 
           setTimeout(resolve, delay, value)
           
           /* Or
           setTimeout(resolve.bind(null, value), delay);
           */
       });
    }

    responseStatus = (response) => {
        // console.log("responseStatus", response.status);
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } 
        else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    json = (response) => {
        // console.log("json", response);
        return response.json()
    }

    /* 
    Fetch example function
    
    fetch('users.json')
        .then(status)
        .then(json)
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        }).catch(function(error) {
            console.log('Request failed', error);
    });  */ 

    /* 
        Returns the products from the database as a Promise.
    */
    getProducts = () => {
        
        // Call order - 1
        var promise = new Promise((resolve, reject) => {
            
            // Use 'fetch" from the whatwg-fetch middleware.
            // Call order - 2
            fetch('http://localhost:3004/products')            
            .then( response => {
                
                // For testing...
                // console.log(response.json());

                // Call order - 4
                resolve(response.json());
            });
            
        })
        
        // Call order - 3
        return promise;
    }

    getWishListProducts = () => {
        
        // Call order - 1
        var promise = new Promise( (resolve, reject) => {
           
            // Use 'fetch" from the whatwg-fetch middleware.
            // This fetch NEVER goes into any of the thenables -
            // after endless debugging, I suspect it's the version of
            // window.fetch supported by Chrome...
            // Call order - 2
            var fetchPromise = fetch('http://localhost:3004/wishlists');
                
            fetchPromise.then( this.responseStatus )
                .then( this.json )
                .then( data => {
                    resolve(data);
                })
                .catch( (error) => {
                    console.log('Request failed.', error);
                });            
        });
        
        
        // Call order - 3
        return promise;
    }
    
    // Add a product to the wishlist.
    addWishListProduct = (wishList, product) => {
        
        let content = {
            wishListId: wishList._id,
            productId: product._id
        };
        
        // Call order - 1
        var promise = new Promise((resolve, reject) => {
            
            // Use 'fetch" from the whatwg-fetch middleware.
            // Call order - 2
            
            fetch('http://localhost:3004/wishlist/product/add', {
                method: 'PUT',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(content)
            })
            .then( this.responseStatus )
            .then( this.json )
            .then( data => {
                // For testing...
                // console.log(data);

                // Call order - 4
                resolve(data);
            })
            .catch( (error) => {
                console.log('Request failed.', error);
            });            

        })
        
        // Call order - 3
        return promise;
       
    }


    // Remove a product from the wishlist.
    removeWishListProduct = (wishList, product) => {
        let content = {
            wishListId: wishList._id,
            productId: product._id
        };
        
        // Call order - 1
        var promise = new Promise((resolve, reject) => {
            
            // Use 'fetch" from the whatwg-fetch middleware.
            // Call order - 2
            
            fetch('http://localhost:3004/wishlist/product/delete', {
                method: 'DELETE',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(content)
            })
            .then( this.responseStatus )
            .then( this.json )
            .then( data => {
                // For testing...
                // console.log(data);

                // Call order - 4
                resolve(data);
            })
            .catch( (error) => {
                console.log('Request failed.', error);
            });            

        })
        
        // Call order - 3
        return promise;
       
        
    }
}

export default HTTPService;