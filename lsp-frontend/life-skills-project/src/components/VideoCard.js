import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import { Button } from 'semantic-ui-react'

export default class VideoCard extends Component {

    constructor () {
        super()
        this.state = {
          isOpen: false,
          location: window.location.href.split('/')[3]
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    

    render() {
        return (
        
                <div className="card" key={this.props.key}>
                    <div className="image">
                        <img src={this.props.video.snippet.thumbnails.default.url} alt="video thumbnail"/>
                    </div>
                    <div className="title">
                         <p>{this.props.video.snippet.title}</p>
                    </div>
                    <div className="modalComponent">
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video.id.videoId} onClose={() => this.setState({isOpen: false})} />
                        <button className='play-btn' onClick={this.openModal}>Play Now</button>
                    </div> 
                    <div className='conditional'>
                      {this.state.location === 'favorites' ?
                      <button className='remove-btn' onClick={() => this.props.removeClick(this.props.video)}>Remove from Favorites</button> :

                      <button className='add-btn' onClick={() => this.props.buttonClick(this.props.video)}>Add to Favorites</button>
                      }  
                    </div>
                       
                </div>
        )
    }
}