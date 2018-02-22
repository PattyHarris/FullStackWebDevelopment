import React, {Component} from 'react';
import './summary.css';

// Components
import Followers from '../followers/followers';
import Income from '../income/income';

// Top row with 2 columns:
// - col 1: followers
// - col 2: income - this is a row with 2 columns.

class Summary extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                
                <div className="col-sm-4 mt-2">
                    <Followers total="20" />
                </div>
                
                { /* Incomes */ }
                <div className="col-sm-8">
                
                    <div className="row">
                        <div className="col-sm-6 mt-2">
                            <Income total="1250" text="Average Monthly Income"/>
                        </div>
                        <div className="col-sm-6 mt-2">
                            <Income total="13865" text="Yearly Income Goal"/>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Summary;