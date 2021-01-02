import React, { Component } from 'react'
import VideoCard from '../components/VideoCard'

export default class VideoContainer extends Component {

    render() {
        
        return (
            <div className="video-container">
                    {
                        this.props.videos.map((vid, index) =>
                        <VideoCard 
                            video={vid}
                            key={index}
                        />
                        )
                    }
            </div>
        )
    }
}


// this.props.videos.map((vid, index) =>
// <VideoCard 
//     video={vid}
//     key={index}
// />
// )