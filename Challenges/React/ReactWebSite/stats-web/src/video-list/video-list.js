import React, {Component} from 'react';
import './video-list.css';

import Video from '../video/video';

class VideoList extends Component {
    
    constructor(props) {
        super(props);
        
        // Initialize the wishlist array.
        this.state = {videoList: [
            {
                views: 15080,
                likes: 120000,
                comments: 5100,
                color: "#0196D0",
                _id: "0"
            },
            {
                views: 15080,
                likes: 120000,
                comments: 5100,
                color: "#CD59AE",
                _id: "1"
            }
        
        ]};
        
        // Bind Functions
        this.createVideoList = this.createVideoList.bind(this);
    }
    
    createVideoList = () => {
        
        const list = this.state.videoList.map( (video) =>
            <Video video={video} key={video._id} />
        );
        
        return list;
    }
    
    
    render() {
        return (
            
            // Doesn't need an outside "div" tag,
            // but it doesn't fix the rounded corners 
            // problem either...
            this.createVideoList()
            
            );
    }
}

export default VideoList;