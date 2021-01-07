import React, { Component } from 'react'
import VideoCard from '../components/VideoCard'


export default class Favorites extends Component {
    render() {
        return (
                 <div className="playlist-container">
                    <h1>my playlist</h1>
                        
                        {    this.props.videos.map((vid, index) =>
                             (<VideoCard 
                                video={vid}
                                key={index}
                            />)
                        )
                        }
                        
                    
            </div>
        )
    }
}
                
  
