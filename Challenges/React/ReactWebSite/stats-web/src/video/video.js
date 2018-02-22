import React, {Component} from 'react';
import './video.css';

class Video extends Component {
    
    constructor(props) {
        super(props);
    }
    
    // This card is used to show the location statistics.
    // It's a 2-tone color card with text in the color
    // area.  Rounded doesn't work here - never figured out
    // why...
    render() {
        return (
            <div className="card text-center text-white w-100 mt-3 rounded videoCard">
                    
                <div className="card-body videoCardTop" style={{backgroundColor: this.props.video.color}}>
                    
                </div>
                
                <div className="card-body videoCardBottom">
                    
                    {/**/}
                    <div className="row">
                        
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <p className="card-title mb-0">{this.props.video.views}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <p className="card-subtitle text-muted mb-2">Shot Views</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-4">
                           <div className="row">
                                <div className="col-12 col-sm-12">
                                    <p className="card-title mb-0">{this.props.video.likes}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <p className="card-subtitle text-muted mb-2">Likes</p>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div className="col-4">
                           <div className="row">
                                <div className="col-12 col-sm-12">
                                    <p className="card-title mb-0">{this.props.video.comments}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="card-subtitle text-muted  mb-2">Coments</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Video;