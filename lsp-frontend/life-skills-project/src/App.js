import './App.scss';
import React, {Component} from 'react';
import TopNavBar from './containers/TopNavBar';
import Login from './components/Login';
import VideoContainer from './containers/VideoContainer';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import logo from "./logo1.png";
import {
  Route
} from "react-router-dom";
//AIzaSyBs4r7n9CX3pz634lgccEbXaHABOrYqBac
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=taxes%7Chome%20improvement&key=[YOUR_API_KEY]'
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAfwqIYBrLrdr6WsciqZSWtTHeukaHApf8
const key='AIzaSyAfwqIYBrLrdr6WsciqZSWtTHeukaHApf8'
const maxResults=100
const finalUrl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=taxes%7Chome%20improvement&key=${key}`


const url = 'http://localhost:3000/videos'

class App extends Component {
  
  state = {
    videos: [],
    currentPage: 1,
    search: ""
}

changeCurrentPage = numPage => {
  this.setState({ currentPage: numPage });
};

componentDidMount(){
  fetch(finalUrl)
    .then(response => response.json())
    .then((YTVids) => {
      const videos = YTVids.items.map(vidObj => vidObj)
      this.setState({videos})
    })
    .catch((error) => {
      console.error(error);
    })
}

customSearch = (e) => {
  this.setState({search: e.target.value})
}



render() {
  const searchVids = this.state.videos.filter(vid => vid.snippet.title.toLowerCase().includes(this.state.search.toLowerCase()))
  
  console.log(searchVids)
  
  return (
    <div className="App">
      <TopNavBar
        logo={logo}
        customSearch = {this.customSearch}
      />
      <Route path ="/login">
        <Login/>
        </Route>
                    
      
      <VideoContainer
        videos = {searchVids.slice((this.state.currentPage - 1) * 9, ((this.state.currentPage - 1) * 9) + 9 )}
      />

      <Pagination
        currentPage={this.state.currentPage}
        totalSize={searchVids.length}
        sizePerPage={9}
        changeCurrentPage={this.changeCurrentPage}
        theme="dark"
      />
    </div>
  );
}
}

export default App;
