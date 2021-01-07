import React, { Component } from 'react'
import VideoCard from '../components/VideoCard'

export default class VideoContainer extends Component {

    render() {
        
        return (
            <div className="video-container">
                    <h2 className='video-header'>Ready Learn Some Life Skills?</h2>
                    <p className='video-subheader'>Your Best Bet for Everything You Didn't Learn in School</p>
                    {   this.props.videos.map((vid, i) =>
                        <div className={`vid-${i}`}>
                            <VideoCard 
                                video={vid}
                                key={i}
                                buttonClick={this.props.addToFavorites}
                            />
                            </div>
                         )
                        
                    }
            </div>
        )
    }
}
