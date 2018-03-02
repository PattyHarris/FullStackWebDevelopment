import 'whatwg-fetch';

class HTTPService {
    
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
        var promise = new Promise((resolve, reject) => {
            
            // Use 'fetch" from the whatwg-fetch middleware.
            // Call order - 2
            
            fetch('http://localhost:3004/wishlists')
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

        
}

export default HTTPService;