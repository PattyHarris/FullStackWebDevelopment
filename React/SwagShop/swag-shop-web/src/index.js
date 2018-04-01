import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

// Added for using React Router 4
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render( (
    
    <BrowserRouter>
        <App />
    </BrowserRouter>

    ), document.getElementById('root')
);

registerServiceWorker();

