import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';

export default class VideoCard extends Component {

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    

    render() {
        return (
        
                <div className="card" key={this.props.key} onClick={() => console.log("click to open video")}>
                    <div className="image">
                        <img src={this.props.video.thumbnail} alt="video thumbnail"/>
                    </div>
                    <div className="title">
                         <p>{this.props.video.title}</p>
                    </div>
                    <div className="modalComponent">
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video.url.split('/')[3]} onClose={() => this.setState({isOpen: false})} />
                        <button onClick={this.openModal}>Play Now</button>
                    </div>     
                </div>
        )
    }
}