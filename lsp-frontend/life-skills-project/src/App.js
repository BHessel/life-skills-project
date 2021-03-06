import './App.scss';
import React, {Component} from 'react';
import TopNavBar from './containers/TopNavBar';
import Login from './components/Login';
import Favorites from './containers/Favorites'
import VideoContainer from './containers/VideoContainer';
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import logo from "./logo1.png";
import {
  Switch,
  Route
} from "react-router-dom";

//AIzaSyBs4r7n9CX3pz634lgccEbXaHABOrYqBac
//AIzaSyAfwqIYBrLrdr6WsciqZSWtTHeukaHApf8
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=taxes%7Chome%20improvement&key=[YOUR_API_KEY]'
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyAfwqIYBrLrdr6WsciqZSWtTHeukaHApf8
const key='AIzaSyBs4r7n9CX3pz634lgccEbXaHABOrYqBac'
const maxResults=50
const finalUrl=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=taxes%7Chome%20improvement&key=${key}`



// const url = 'http://localhost:3000/videos'

class App extends Component {
  
  state = {
    videos: [],
    currentPage: 1,
    search: "",
    favorites: []
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

addToFavorites = (video) => {
  if(!this.state.favorites.includes(video)){
  this.setState({ favorites: [...this.state.favorites, video]})}
}

removeFromFavorites = (video) => {
  let favorites = this.state.favorites.filter(vid => vid.id.videoId !== video.id.videoId)
  this.setState({ favorites })
}



render() {
  const searchVids = this.state.videos.filter(vid => vid.snippet.title.toLowerCase().includes(this.state.search.toLowerCase()))
  
  
  return (
    <div className="App">
      <TopNavBar
        logo={logo}
        customSearch = {this.customSearch}
      />

      <Switch>
      <Route exact path ="/login" component={Login}/>
      
      <Route exact path ="/favorites" render={() => <Favorites removeFromFavorites={this.removeFromFavorites} videos = {this.state.favorites.slice((this.state.currentPage - 1) * 9, ((this.state.currentPage - 1) * 9) + 9 )}/>}/>
        
      <Route exact path ="/" render={() => <VideoContainer addToFavorites={this.addToFavorites}
        videos = {searchVids.slice((this.state.currentPage - 1) * 9, ((this.state.currentPage - 1) * 9) + 9 )}
        
      />}/>
      

      </Switch>

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
