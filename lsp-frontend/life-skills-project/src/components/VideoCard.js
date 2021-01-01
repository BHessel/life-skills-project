import React, { Component } from 'react'

export default class VideoCard extends Component {
    render() {
        return (
        
                <div className="card" key={this.props.key} onClick={() => console.log("click to open video")}>
                    <div className="image">
                        <img src={this.props.video.thumbnail} alt="video thumbnail"/>
                    </div>
                    <div className="title">
                         <p>{this.props.video.title}</p>
                    </div>
                </div>
        )
    }
}




// export default class VideoCard extends Component {
//     render() {
//         return (
//             <div className="col">
//                 <div className="card" key={this.props.video.id} onClick={() => console.log("click to open video")}>
//                     <div className="image">
//                         <img src={this.props.video.thumbnail} alt="video thumbnail"/>
//                     </div>
//                     <div className="title">
//                         <p>{this.props.video.title}</p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

