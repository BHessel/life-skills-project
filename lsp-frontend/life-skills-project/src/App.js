import './App.scss';
import React, {Component} from 'react';
import TopNavBar from './containers/TopNavBar';
import SideNavBar from './containers/SideNavBar';
import VideoContainer from './containers/VideoContainer';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import logo from "./logo1.png";


const url = 'http://localhost:3000/videos'
class App extends Component {

state = {
  videos: [],
  currentPage: 1,
  currentVids: []
}

changeCurrentPage = numPage => {
  this.setState({ currentPage: numPage });
};

async componentDidMount(){
  const response = await fetch(url)
  const videos = await response.json()
  this.setState({ videos })
}


render() {
  return (
    <div className="App">
      <TopNavBar
        logo={logo}
      />
      <SideNavBar/>
      <VideoContainer
        videos = {this.state.videos.slice((this.state.currentPage - 1) * 9, ((this.state.currentPage - 1) * 9) + 9 )}
      />

    <Pagination
      currentPage={this.state.currentPage}
      totalSize={this.state.videos.length}
      sizePerPage={9}
      changeCurrentPage={this.changeCurrentPage}
      theme="dark"
    />
  
    </div>
  );
}
}

export default App;
